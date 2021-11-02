import axios from 'axios';
import React, { useEffect, useState } from 'react';

import useGlobalState from '../../state';
import CheckIcon from './CheckIcon';
import SortUpIcon from './SortUpIcon';
import SortDownIcon from './SortDownIcon';

import * as S from './styles';

const COLUMNS = [
  { id: 'id', name: 'ID', width: '90px'},
  { id: 'name', name: 'Name', width: '125px'},
  { id: 'date', name: 'Date', width: '100px'},
  { id: 'hazardous', name: 'Potentially Hazardous', width: '180px'},
  { id: 'diameterMin', name: 'Diameter Minimum (m)', width: '180px'},
  { id: 'diameterMax', name: 'Diameter Maximum (m)', width: '180px'},
  { id: 'missedBy', name: 'Missed By (km)', width: '155px'},
];

function formatStringToDecimal(str) {
  return Number(str).toFixed(2);
}

function alphaCompare(a, b, field) {
  if (a[field] < b[field]) {
    return -1;
  }
  if (a[field] > b[field]) {
    return 1;
  }
  return 0;
}

export const ResultsTable = () => {
  const { state } = useGlobalState();
  const { startDate, endDate, search } = state;
  const [neObjects, setNeObjects] = useState([]);
  const [sortColumn, setSortColumn] = useState({ name: 'id', direction: 'asc' });

  useEffect(() => {
    const fetchNeObjects = async () => {
      const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`);
      setNeObjects(response.data);
    };
    fetchNeObjects();
  }, [startDate, endDate, setNeObjects]);

  const toggleSortColumn = (colName) => {
    if (sortColumn.name === colName) {
      setSortColumn({ name: colName, direction: sortColumn.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      setSortColumn({ name: colName, direction: 'asc' });
    }
  };

  const renderTableHeader = (colID, colName) => {
    let sortIcon = null;
    if (sortColumn.name === colID) {
      sortIcon = sortColumn.direction === 'asc' ? <SortUpIcon /> :  <SortDownIcon />;
    }

    return (
      <S.HeaderContainer>
        <S.HeaderTitle>{colName}</S.HeaderTitle>
        {sortIcon}
      </S.HeaderContainer>
    );
  };

  const objectSets = neObjects['near_earth_objects']
    ? Object.keys(neObjects['near_earth_objects']).map(k => neObjects['near_earth_objects'][k].map(info => {
      return {
        date: k,
        id: info.id,
        name: info.name,
        hazardous: info.is_potentially_hazardous_asteroid,
        diameterMin: formatStringToDecimal(info.estimated_diameter.meters.estimated_diameter_min),
        diameterMax: formatStringToDecimal(info.estimated_diameter.meters.estimated_diameter_max),
        missedBy: formatStringToDecimal(info.close_approach_data[0].miss_distance.kilometers),
      };
    }))
    : [];
  let flattenedObjects = [].concat.apply([], objectSets);
  flattenedObjects.sort((a, b) => alphaCompare(a, b, sortColumn.name));
  if (sortColumn.direction === 'desc') {
    flattenedObjects.reverse();
  }

  if (search) {
    flattenedObjects = flattenedObjects.filter((obj) => obj.name.includes(search));
  }

  return (
    <S.Table>
      <thead>
        <S.HeaderRow>
          {COLUMNS.map((col) => {
            return <S.HeaderColumn key={col.id} style={{ width: col.width }} onClick={() => toggleSortColumn(col.id)}>{renderTableHeader(col.id, col.name)}</S.HeaderColumn>;
          })}
        </S.HeaderRow>
      </thead>
      <S.TableBody>
        {flattenedObjects.length === 0 && <tr><S.EmptyColumn>Failed to retrieve any data.</S.EmptyColumn></tr>}
        {flattenedObjects.map((obj) => {
          return (
            <tr key={obj.id}>
              <S.TableColumn style={{ width: COLUMNS[0].width }}>{obj.id}</S.TableColumn>
              <S.TableColumn style={{ width: COLUMNS[1].width }}>{obj.name}</S.TableColumn>
              <S.TableColumn style={{ width: COLUMNS[2].width }}>{obj.date}</S.TableColumn>
              <S.TableColumn style={{ width: COLUMNS[3].width }}>
                <S.CenteredContent>{obj.hazardous ? <CheckIcon/> : null}</S.CenteredContent>
              </S.TableColumn>
              <S.TableColumn style={{ width: COLUMNS[4].width }}>{obj.diameterMin}</S.TableColumn>
              <S.TableColumn style={{ width: COLUMNS[5].width }}>{obj.diameterMax}</S.TableColumn>
              <S.TableColumn style={{ width: COLUMNS[6].width }}>{obj.missedBy}</S.TableColumn>
            </tr>
          );
        })}
      </S.TableBody>
      <tfoot>
        <tr>
          <S.FooterColumn style={{ width: COLUMNS[0].width }}>Total Objects:</S.FooterColumn>
          <S.FooterColumn style={{ width: COLUMNS[1].width }}>{neObjects.element_count || 0}</S.FooterColumn>
        </tr>
      </tfoot>
    </S.Table>
  );
};

export default ResultsTable;
