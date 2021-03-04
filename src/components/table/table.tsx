import React, {useEffect, useState} from 'react';
import * as Actions from 'src/data-layer/system/actionCreators';
import {connect} from 'react-redux';
import {PaginationComplex, Spinner, Link}
  from '@openvtb/react-ui-kit';
import {
  Wrapper, Table, TitleRow, Caption, RowRight, SearchPanel, THead, TBody, TRow,
  THeadColumn, TRowColumn, ResizeHandle, Icon, Nodata} from './style';
import RightPanel from './rightPanel';
const styles = require('./custom.css');
import arrowDownIcon from
  '@openvtb/admiral-icons/build/system/ChevronDownOutline.svg';
import arrowUpIcon from
  '@openvtb/admiral-icons/build/system/ChevronUpOutline.svg';

import {IProps} from './interfaces';
import {FilterButton} from '../FilterButton/FilterButton';
import {ExportListButton} from '../ExportListButton/ExportListButton';
import {SearchButton} from '../SearchButton/SearchButton';
import SearchApp from 'src/pages/modals/search-app';
import FilterApp from 'src/pages/modals/filter-app';
import {IFilterParams, ISearchParams} from '../../data-layer/application/types';

function DataTable(props: IProps) {
  const {caption, headerElements, dataIsLoading, data, actions, method,
    firstColLink, editRow, extendedInfo} = props;
  const content = data.content || [];
  const totalElements = data.totalElements || 1;
  // const [searchValue, setSearchValue] = useState('');
  const [resizedHeader, setResizedHeader] = useState<any>(null);
  const sortOptions = headerElements.reduce((acc, curr)=> {
    acc[curr.fieldName] = 'desc';
    return acc;
  }, {});
  const searchParamsDefault = {
    documentNumber: '',
    clientLastNameSearch: '',
    clientFirstNameSearch: '',
    clientMiddleNameSearch: '',
    clientBirthdaySearch: new Date(),
  };
  const filterParamsDefault = {
    perionAppFilter: 'intevalDateAll',
    viewAppFilter: 'viewAppBoard',
    stateAppItemsFilter: 'stateAll',
  };
  const [sortDirection, setSortDirection] = useState<any>(sortOptions);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchModalParams, setSearchModalParams] = useState<ISearchParams>({
    ...searchParamsDefault, opened: false});
  const [filterModalParams, setFilterModalParams] = useState<IFilterParams>({
    ...filterParamsDefault, opened: false});
  const [rightPanelParams, setRightPanelParams] = useState<any>({
    show: false
  });
  const [pagingParams, setPagingParams] = useState<any>({
    size: 10,
    sort: 'number,desc'
  });
  const makeSort = (fieldName: string) => {
    const direction = sortDirection[fieldName] === 'asc' ? 'desc' : 'asc';
    setSortDirection({
      [fieldName]: direction});
    setPagingParams({
      ...pagingParams,
      sort: `${fieldName},${direction}`
    });
  };
  const searchApp = (item: any) => {
    console.log('search...');
    setSearchModalParams({...item, opened: true});
  };

  const filterApp = (item: any) => {
    console.log('filter...');
    setFilterModalParams({...item, opened: true});
  };

  useEffect(() => {
    method(Object.assign(pagingParams, {page: currentPage-1}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pagingParams]);

  return (
    <>
      <TitleRow>
        <Caption>{caption}</Caption>
        <RowRight style={{zIndex: 32761}}>
          <PaginationComplex
            itemsPerPage={pagingParams.size}
            page={currentPage}
            totalItems={totalElements}
            className={styles.pagination}
            disableItemsPerPageSelect={false}
            onItemsPerPageChange={()=>console.log('onItemsPerPageChange')}
            onPageChange={(selectPage: number)=>{
              setCurrentPage(selectPage);
            }}
          ></PaginationComplex>
        </RowRight>
      </TitleRow>
      <Wrapper>
        <SearchPanel>
          <FilterButton onClick={filterApp}/>
          <ExportListButton/>
          <SearchButton onClick={searchApp}/>
        </SearchPanel>
        <Table colSize={headerElements.length}>
          <THead onMouseMove={(e) => {
            if (resizedHeader) {
              const width = e.clientX - resizedHeader.offsetLeft - 24;
              const size = width;
              const min =
              resizedHeader.getAttribute('data-set-min-width');
              resizedHeader.style.width = `${Math.max(min, size)}px`;
            }
          }} onMouseUp={() =>
            setResizedHeader(null)}>
            <TRow>{
              headerElements && headerElements.map((item, i) => {
                return <THeadColumn
                  key={i}
                  onClick={() => {
                    makeSort(item.fieldName);
                  }}>
                  {item.name}<img
                    style={{width: '10px', marginLeft: '5px'}}
                    src={sortDirection[item.fieldName] === 'desc' ?
                    arrowUpIcon : arrowDownIcon}/>
                  <ResizeHandle onMouseDown={({target}) => {
                    const column = target.parentNode;
                    const minWidth =
                    column.getAttribute('data-set-min-width') ||
                    column.offsetWidth;
                    column.setAttribute('data-set-min-width', minWidth);
                    setResizedHeader(column);
                  }}/>
                </THeadColumn>;
              })
            }
            <THeadColumn></THeadColumn>
            </TRow>
          </THead>
          {!dataIsLoading &&
            <TBody>
              {
                content && content.map((row: any, i: number) => {
                  return (
                    <TRow key={i}>
                      {
                        headerElements &&
                        headerElements.map((col: any, j: number) => {
                          return <TRowColumn key={j}>
                            {j === 0 && firstColLink ?
                            <Link
                              size="small"
                              href="#"
                              onClick={() => {
                                setRightPanelParams({
                                  show: true, index: i});
                              }}>
                              {row[col.fieldName]}
                            </Link> :
                            row[col.fieldName]}
                          </TRowColumn>;
                        })
                      }
                      <TRowColumn>
                        <div
                          style={{display: 'flex', justifyContent: 'flex-end'}}>
                          {
                            actions && actions.map((action: any, i: number) => {
                              return action.type === 'link' ?
                              <Link
                                size="small"
                                style={{margin: '0 12px'}}
                                href={action.href} key={i}>
                                {action.caption}
                              </Link> :
                              <Icon title={action.caption}
                                svgUrl={action.svg}
                                onClick={() => {
                                  action.onClick &&
                                  action.onClick(row, ()=>setCurrentPage(1));
                                }} key={i}/>;
                            })
                          }
                        </div>
                      </TRowColumn>
                    </TRow>
                  );
                })
              }
            </TBody>
          }
        </Table>
        <RightPanel params={rightPanelParams} setParams={setRightPanelParams}
          data={content} edit={editRow} extendedInfo={extendedInfo}/>
        <div
          style={{
            marginTop: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'}}>
          {dataIsLoading &&<Spinner
            size="big"
          /> }
          {(!dataIsLoading && content.length === 0) &&
          <Nodata>Нет данных</Nodata>}
        </div>
      </Wrapper>
      {searchModalParams.opened && <SearchApp
        params={searchModalParams}
        onColseRequest={setSearchModalParams}
        confirm={(params: any) => {
          console.log('search...' + params.id);
          setSearchModalParams({opened: false});
        }}/>}
      {filterModalParams.opened && <FilterApp
        params={filterModalParams}
        onColseRequest={setFilterModalParams}
        confirm={(params: any) => {
          console.log('filter...' + params.id);
          setFilterModalParams({opened: false});
        }}/>}
    </>
  );
}

export default connect(null, Actions)(DataTable);
