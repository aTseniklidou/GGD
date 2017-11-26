import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './table.scss'
import _ from 'lodash'
import {
  Paper,
  Button,
  Popover,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Table as TableBoard,
} from 'material-ui'
import {
  transformName,
  getTableHeader,
} from 'utils/helpers'

class Table extends Component {
  constructor (props: Table.propTypes) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { content, category, } = this.props
    return (
      <Paper className='tableWrapper'>
        <TableBoard>
          <TableHead>
            <TableRow>
              {getTableHeader(category).map(h =>
                <TableCell padding={'dense'}>{h}</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {content && content.map((item, index) => (
              <TableRow hover key={index}>
                <TableCell padding={'dense'}>
                  {item.name}
                </TableCell>
                <TableCell padding={'dense'}>
                  <div className='flexClass'>
                  {item.content.map(c =>
                    <a
                      target='_blank'
                      style={{ marginRight: '10px' }}
                      href={c.link}>
                      {c.name}
                    </a>
                  )}
                  </div>
                </TableCell>
                <TableCell padding={'dense'}>
                  <div className='flexClass'>
                  {item.links1.map(m =>
                    <a
                      target='_blank'
                      style={{ marginRight: '10px' }}
                      href={m.link}>
                      {transformName(m.type) || m.type}
                    </a>)}
                  </div>
                </TableCell>
                {item.links2 &&
                <TableCell padding={'dense'}>
                  <div className='flexClass'>
                  {item.links2.map(p =>
                    <a
                      target='_blank'
                      style={{ marginRight: '10px' }}
                      href={p.link}>
                      {transformName(p.type) || p.type}
                    </a>)}
                  </div>
                </TableCell>
                }
                <TableCell padding={'dense'}>
                  {item.other.map(f => f !== null && <span className='footerItem'>{f}</span>)}
                </TableCell>
              </TableRow>
              ))}
          </TableBody>
        </TableBoard>
      </Paper>
    )
  }
}

Table.propTypes = {
  content: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
}

export default Table
