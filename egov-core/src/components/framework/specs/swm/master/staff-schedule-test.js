var dat = {
  "swm.create": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "sanitationStaffSchedules",
    "groups": [{
      "name": "SourceSegregationDetails",
      "label": "swm.create.group.title.SourceSegregationDetails",
      "fields": [{
        "name": "targetNo",
        "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.targetNo",
        "label": "swm.create.sanitationStaffTarget.targetNo",
        "pattern": "",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 256,
        "minLength": 1,
        "patternErrorMsg": "",
        "url": "/swm-services/sanitationstafftargets/_search?|$..targetNo|$..employee.name"
      }, {
        "name": "targetFrom",
        "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.targetFrom",
        "label": "swm.create.sanitationStaffTarget.targetFrom",
        "pattern": "",
        "type": "number",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "targetTo",
        "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.targetTo",
        "label": "swm.create.sanitationStaffTarget.targetTo",
        "pattern": "",
        "type": "number",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }]
    }, {
      "name": "SourceSegregationDetails2",
      "label": "swm.create.group.title.SourceSegregationDetails2",
      "fields": [{
        "name": "name",
        "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.route.name",
        "label": "swm.create.route.name",
        "pattern": "",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 128,
        "minLength": 1,
        "patternErrorMsg": ""
      }, {
        "name": "name",
        "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.dumpingGround.name",
        "label": "swm.create.dumpingGround.name",
        "pattern": "",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 128,
        "minLength": 1,
        "patternErrorMsg": ""
      }, {
        "name": "code",
        "jsonPath": "sanitationStaffSchedules[0].shift.code",
        "label": "swm.create.shift.code",
        "pattern": "",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 256,
        "minLength": 1,
        "patternErrorMsg": "",
        "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=Shift|$..code|$..name"
      },
      {
        "name": "code",
        "jsonPath": "sanitationStaffSchedules[0].shift.code",
        "label": "swm.create.shift.code",
        "pattern": "",
        "type": "textTwo",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 256,
        "minLength": 1,
        "patternErrorMsg": "",
        "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=Shift|$..code|$..name"
      }]
    }],
    "url": "/swm-services/sanitationstaffschedules/_create",
    "tenantIdRequired": true
  },,
  "swm.search": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "",
    "url": "/swm-services/sanitationstaffschedules/_search",
    "groups": [{
      "name": "search",
      "label": "swm.search.title",
      "fields": [{
        "name": "ids",
        "jsonPath": "ids",
        "label": "swm.create.ids",
        "type": "",
        "isDisabled": false,
        "patternErrorMsg": "swm.create.field.message.ids"
      }, {
        "name": "transactionNo",
        "jsonPath": "transactionNo",
        "label": "swm.create.transactionNo",
        "type": "",
        "isDisabled": false,
        "patternErrorMsg": "swm.create.field.message.transactionNo"
      }, {
        "name": "name",
        "jsonPath": "name",
        "label": "swm.create.name",
        "type": "",
        "isDisabled": false,
        "patternErrorMsg": "swm.create.field.message.name"
      }, {
        "name": "collectionPoints",
        "jsonPath": "collectionPoints",
        "label": "swm.create.collectionPoints",
        "type": "",
        "isDisabled": false,
        "patternErrorMsg": "swm.create.field.message.collectionPoints"
      }, {
        "name": "dumpingGround",
        "jsonPath": "dumpingGround",
        "label": "swm.create.dumpingGround",
        "type": "",
        "isDisabled": false,
        "patternErrorMsg": "swm.create.field.message.dumpingGround"
      }, {
        "name": "offSet",
        "jsonPath": "offSet",
        "label": "swm.create.offSet",
        "type": "number",
        "isDisabled": false,
        "patternErrorMsg": "swm.create.field.message.offSet"
      }]
    }],
    "result": {
      "header": [{
        "label": "swm.search.result.employeeName"
      }, {
        "label": "swm.search.result.shift"
      }],
      "values": ["employee.name", "shift.name"],
      "resultPath": "sanitationStaffSchedules",
      "rowClickUrlUpdate": "/update/swm/sanitationstaffschedules/{transactionNo}",
      "rowClickUrlView": "/view/swm/sanitationstaffschedules/{transactionNo}"
    }
  }

}
export default dat;

// "swm.search": {
//   "numCols": 4,
//   "useTimestamp": true,
//   "objectName": "",
//   "url": "/swm-services/sanitationstaffschedules/_search",
//   "groups": [{
//     "name": "search",
//     "label": "swm.search.title",
//     "fields": [{
//       "name": "ids",
//       "jsonPath": "ids",
//       "label": "swm.create.ids",
//       "type": "",
//       "isDisabled": false,
//       "patternErrorMsg": "swm.create.field.message.ids"
//     }, {
//       "name": "transactionNo",
//       "jsonPath": "transactionNo",
//       "label": "swm.create.transactionNo",
//       "type": "",
//       "isDisabled": false,
//       "patternErrorMsg": "swm.create.field.message.transactionNo"
//     }, {
//       "name": "name",
//       "jsonPath": "name",
//       "label": "swm.create.name",
//       "type": "",
//       "isDisabled": false,
//       "patternErrorMsg": "swm.create.field.message.name"
//     }, {
//       "name": "collectionPoints",
//       "jsonPath": "collectionPoints",
//       "label": "swm.create.collectionPoints",
//       "type": "",
//       "isDisabled": false,
//       "patternErrorMsg": "swm.create.field.message.collectionPoints"
//     }, {
//       "name": "dumpingGround",
//       "jsonPath": "dumpingGround",
//       "label": "swm.create.dumpingGround",
//       "type": "",
//       "isDisabled": false,
//       "patternErrorMsg": "swm.create.field.message.dumpingGround"
//     }, {
//       "name": "offSet",
//       "jsonPath": "offSet",
//       "label": "swm.create.offSet",
//       "type": "number",
//       "isDisabled": false,
//       "patternErrorMsg": "swm.create.field.message.offSet"
//     }]
//   }],
//   "result": {
//     "header": [{
//       "label": "swm.search.result.employeeName"
//     }, {
//       "label": "swm.search.result.shift"
//     }],
//     "values": ["employee.name", "shift.name"],
//     "resultPath": "sanitationStaffSchedules",
//     "rowClickUrlUpdate": "/update/swm/sanitationstaffschedules/{transactionNo}",
//     "rowClickUrlView": "/view/swm/sanitationstaffschedules/{transactionNo}"
//   }
// },
// "swm.view": {
//   "numCols": 4,
//   "useTimestamp": true,
//   "objectName": "sanitationStaffSchedules",
//   "groups": [{
//     "name": "SourceSegregationDetails",
//     "label": "swm.create.group.title.SourceSegregationDetails",
//     "fields": [{
//       "name": "targetNo",
//       "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.targetNo",
//       "label": "swm.create.sanitationStaffTarget.targetNo",
//       "pattern": "",
//       "type": "text",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "maxLength": 256,
//       "minLength": 1,
//       "patternErrorMsg": "",
//       "url": "/swm-services/sanitationstafftargets/_search?|$..targetNo|$..employee.name"
//     }, {
//       "name": "targetFrom",
//       "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.targetFrom",
//       "label": "swm.create.sanitationStaffTarget.targetFrom",
//       "pattern": "",
//       "type": "number",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "patternErrorMsg": ""
//     }, {
//       "name": "targetTo",
//       "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.targetTo",
//       "label": "swm.create.sanitationStaffTarget.targetTo",
//       "pattern": "",
//       "type": "number",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "patternErrorMsg": ""
//     }]
//   }, {
//     "name": "SourceSegregationDetails2",
//     "label": "swm.create.group.title.SourceSegregationDetails2",
//     "fields": [{
//       "name": "name",
//       "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.route.name",
//       "label": "swm.create.route.name",
//       "pattern": "",
//       "type": "text",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "maxLength": 128,
//       "minLength": 1,
//       "patternErrorMsg": ""
//     }, {
//       "name": "name",
//       "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.dumpingGround.name",
//       "label": "swm.create.dumpingGround.name",
//       "pattern": "",
//       "type": "text",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "maxLength": 128,
//       "minLength": 1,
//       "patternErrorMsg": ""
//     }, {
//       "name": "code",
//       "jsonPath": "sanitationStaffSchedules[0].shift.code",
//       "label": "swm.create.shift.code",
//       "pattern": "",
//       "type": "text",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "maxLength": 256,
//       "minLength": 1,
//       "patternErrorMsg": "",
//       "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=Shift|$..code|$..name"
//     }]
//   }],
//   "tenantIdRequired": true,
//   "url": "/swm-services/sanitationstaffschedules/_search?transactionNo={transactionNo}"
// },
// "swm.update": {
//   "numCols": 4,
//   "useTimestamp": true,
//   "objectName": "sanitationStaffSchedules",
//   "groups": [{
//     "name": "SourceSegregationDetails",
//     "label": "swm.create.group.title.SourceSegregationDetails",
//     "fields": [{
//       "name": "targetNo",
//       "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.targetNo",
//       "label": "swm.create.sanitationStaffTarget.targetNo",
//       "pattern": "",
//       "type": "text",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "maxLength": 256,
//       "minLength": 1,
//       "patternErrorMsg": "",
//       "url": "/swm-services/sanitationstafftargets/_search?|$..targetNo|$..employee.name"
//     }, {
//       "name": "targetFrom",
//       "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.targetFrom",
//       "label": "swm.create.sanitationStaffTarget.targetFrom",
//       "pattern": "",
//       "type": "number",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "patternErrorMsg": ""
//     }, {
//       "name": "targetTo",
//       "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.targetTo",
//       "label": "swm.create.sanitationStaffTarget.targetTo",
//       "pattern": "",
//       "type": "number",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "patternErrorMsg": ""
//     }]
//   }, {
//     "name": "SourceSegregationDetails2",
//     "label": "swm.create.group.title.SourceSegregationDetails2",
//     "fields": [{
//       "name": "name",
//       "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.route.name",
//       "label": "swm.create.route.name",
//       "pattern": "",
//       "type": "text",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "maxLength": 128,
//       "minLength": 1,
//       "patternErrorMsg": ""
//     }, {
//       "name": "name",
//       "jsonPath": "sanitationStaffSchedules[0].sanitationStaffTarget.dumpingGround.name",
//       "label": "swm.create.dumpingGround.name",
//       "pattern": "",
//       "type": "text",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "maxLength": 128,
//       "minLength": 1,
//       "patternErrorMsg": ""
//     }, {
//       "name": "code",
//       "jsonPath": "sanitationStaffSchedules[0].shift.code",
//       "label": "swm.create.shift.code",
//       "pattern": "",
//       "type": "text",
//       "isRequired": false,
//       "isDisabled": false,
//       "defaultValue": "",
//       "maxLength": 256,
//       "minLength": 1,
//       "patternErrorMsg": "",
//       "url": "/egov-mdms-service/v1/_get?&moduleName=SWM&masterName=Shift|$..code|$..name"
//     }]
//   }],
//   "url": "/swm-services/sanitationstaffschedules/_update",
//   "tenantIdRequired": true,
//   "searchUrl": "/swm-services/sanitationstaffschedules/_search?transactionNo={transactionNo}"
// }
