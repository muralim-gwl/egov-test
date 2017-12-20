import React, { Component } from 'react';
import { Grid, Row, Col, Table, DropdownButton } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import { translate } from '../../common/common';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import _ from 'lodash';

class UiFileTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileRowCount: 1,
      isintialLoad: false,
    };
  }
  componentWillMount() {
    this.setState({
      fileRowCount: this.props.item.fileCount,
    });
  }
  componentWillReceiveProps(nextProps) {
    let { fileRowCount, isintialLoad } = this.state;
    let { item } = nextProps;
    var rowCount = fileRowCount;
    if (!isintialLoad && item.fileCount && item.fileCount > fileRowCount) {
      this.setState({
        fileRowCount: item.fileCount,
        isintialLoad: true,
      });
    } else if (!isintialLoad && !item.fileCount) {
      this.setState({
        fileRowCount: 10,
        isintialLoad: true,
      });
    }
  }
  renderFileObject = (item, i, idValue, readOnly) => {
    if (readOnly) {
      return (
        <a
          href={
            window.location.origin +
            '/filestore/v1/files/id?tenantId=' +
            localStorage.tenantId +
            '&fileStoreId=' +
            this.props.getVal(item.jsonPath + '[' + i + '].' + item.fileList.id)
          }
          target="_blank"
        >
          {translate('wc.craete.file.Download')}
        </a>
      );
    } else {
      return (
        <div date={idValue}>
          <input
            type="file"
            onChange={e => {
              this.props.handler(
                { target: { value: e.target.files[0] } },
                item.jsonPath + '[' + i + '].' + item.fileList.id,
                item.isRequired,
                '',
                item.requiredErrMsg,
                item.patternErrMsg
              );
            }}
          />
        </div>
      );
    }
  };

  renderRowList = item => {
    let { fileRowCount } = this.state;
    var fileRowCountValue = fileRowCount;
    console.log('testval:', this.props.readonly);
    let documentListArray = this.props.getVal(item.jsonPath);
    if (_.isArray(documentListArray) && documentListArray.length > 0) {
      var documentsLenth = 0;
      documentListArray.map((item, index) => {
        if (item.fileStoreId === 'string' && item.fileStoreId.length > 0) {
          documentsLenth = documentsLenth + 1;
        }
      });

      if (this.props.readonly) {
        fileRowCountValue = documentListArray.length;
      } else {
        fileRowCountValue = documentsLenth + fileRowCount;
      }
    }

    let arr = [...Array(fileRowCountValue).keys()];
    //console.log("2222222",arr.length)
    let value = '';
    let readOnly = false;

    return (
      <tbody>
        {arr &&
          arr.length &&
          arr.map((v, i) => {
            let fileListName = item.jsonPath + '[' + i + '].' + item.fileList.name;
            let fileStoreId = item.jsonPath + '[' + i + '].' + item.fileList.id;

            value = this.props.getVal(fileListName);
            let idValue = this.props.getVal(fileStoreId);
            if (typeof idValue == 'string' && idValue.length > 0) {
              readOnly = true;
            } else {
              readOnly = false;
            }

            if (value || idValue || !this.props.readonly) {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <TextField
                      className="cutustom-form-controll-for-textfield"
                      id={item.jsonPath.split('.').join('-')}
                      inputStyle={{ color: '#5F5C57' }}
                      errorStyle={{ float: 'left' }}
                      fullWidth={true}
                      disabled={readOnly}
                      value={value}
                      onChange={e => {
                        this.props.handler(e, fileListName, item.isRequired, '', item.requiredErrMsg, item.patternErrMsg);
                      }}
                    />
                  </td>
                  <td>{this.renderFileObject(item, i, idValue, readOnly)}</td>
                  {this.props.readonly ? (
                    ''
                  ) : (
                    <td>
                      <div
                        className="material-icons"
                        onClick={() => {
                          this.deleteRow(i);
                        }}
                      >
                        delete
                      </div>
                    </td>
                  )}
                </tr>
              );
            }
          })}
      </tbody>
    );
  };

  renderFileTable = item => {
    switch (this.props.ui) {
      case 'google':
        return (
          <div>
            <Table className="table table-striped table-bordered" responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>{translate('tl.create.license.table.documentName')}</th>
                  <th>{translate('wc.create.groups.fileDetails.title')}</th>
                  {this.props.readonly ? '' : <th>{translate('reports.common.action')}</th>}
                </tr>
              </thead>
              {this.renderRowList(item)}
            </Table>
            {this.props.readonly ? (
              ''
            ) : (
              <div style={{ textAlign: 'right' }}>
                <RaisedButton
                  label={translate('pgr.lbl.add')}
                  primary={true}
                  onClick={() => {
                    this.addNewRow();
                  }}
                />
              </div>
            )}
          </div>
        );
    }
  };
  addNewRow() {
    this.setState({
      fileRowCount: this.state.fileRowCount + 1,
    });
  }
  deleteRow = ind => {
    let { item } = this.props;
    //let formData = JSON.parse(JSON.stringify(this.props.formData));
    let formDataArray = _.get(this.props.formData, item.jsonPath);
    if (formDataArray && formDataArray.length) {
      formDataArray.splice(ind, 1);
      var newArray = _.cloneDeep(formDataArray);
      var newFormData = _.set(this.props.formData, item.jsonPath, newArray);
      this.props.setFormData(newFormData);
    }

    this.setState({
      fileRowCount: this.state.fileRowCount - 1,
    });
  };

  render() {
    return <div>{this.renderFileTable(this.props.item)}</div>;
  }
}
const mapStateToProps = state => ({
  formData: state.frameworkForm.form,
});

const mapDispatchToProps = dispatch => ({
  setFormData: data => {
    dispatch({ type: 'SET_FORM_DATA', data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UiFileTable);
