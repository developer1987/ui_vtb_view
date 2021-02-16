import React, {useState} from 'react';
import * as Actions from 'src/data-layer/system/actionCreators';
import {connect} from 'react-redux';
import {Spinner, Link}
  from '@openvtb/react-ui-kit';
import {
  Wrapper, Table, TitleRow, THead, TBody, TRow,
  THeadColumn, TRowColumn, ResizeHandle, Icon, SmallCaption} from './style';
import arrowDownIcon from
  '@openvtb/admiral-icons/build/system/ChevronDownOutline.svg';
import arrowUpIcon from
  '@openvtb/admiral-icons/build/system/ChevronUpOutline.svg';

import {IProps} from './interfaces';

function CustomTable(props: IProps) {
  const {caption, headerElements, dataIsLoading, data, actions} = props;
  const content = data.content;
  const [sortDirection, setSortDirection] = useState('desc');

  const sortListByString = function(list: any[], paramName: string,
      direction: string) {
    if (Array.isArray(list) && paramName) {
      return list.sort((a, b) => {
        return direction === 'asc' ? sortBySting(a, b, paramName) :
        sortBySting(b, a, paramName);
      });
    }

    function sortBySting(a: any, b: any, attr: string) {
      if (String(a[attr]).toLowerCase() < String(b[attr]).toLowerCase()) {
        return -1;
      }
      if (String(b[attr]).toLowerCase() > String(b[attr]).toLowerCase()) {
        return 1;
      }
      return 0;
    }
  };

  const makeSort = (fieldName: string) => {
    setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
    sortListByString(content, fieldName, sortDirection);
  };

  return (
    <div style={{width: '100%'}}>
      <TitleRow>
        <SmallCaption>{caption}</SmallCaption>
      </TitleRow>
      <Wrapper>
        <Table colSize={headerElements.length}>
          <THead>
            <TRow>{
              headerElements && headerElements.map((item, i) => {
                return <THeadColumn
                  key={i}
                  onClick={() => {
                    makeSort(item.fieldName);
                  }}>
                  {item.name}<img
                    style={{width: '10px', marginLeft: '5px'}}
                    src={sortDirection === 'desc' ?
                    arrowUpIcon : arrowDownIcon}/>
                  <ResizeHandle />
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
                            {row[col.fieldName]}
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
                                style={{margin: '0 12px'}}
                                href={action.href} key={i}>
                                {action.caption}
                              </Link> :
                              <Icon title={action.caption}
                                svgUrl={action.svg}
                                onClick={() => {
                                  action.onClick && action.onClick(row);
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
        {dataIsLoading &&
          <div
            style={{
              marginTop: '15px',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center'}}>
            <Spinner
              size="big"
            />
          </div>
        }
      </Wrapper>
    </div>
  );
}

export default connect(null, Actions)(CustomTable);
