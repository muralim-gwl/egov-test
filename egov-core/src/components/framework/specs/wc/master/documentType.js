var dat = {
  'wc.create': {
    numCols: 2,
    url: '/wcms/masters/documenttypes/_create',
    tenantIdRequired: true,
    idJsonPath: 'DocumentTypes[0].code',
    useTimestamp: true,
    objectName: 'DocumentTypes',
    groups: [
      {
        label: 'wc.create.documentType.title',
        name: 'createDocumentType',
        fields: [
          {
            name: 'name',
            jsonPath: 'DocumentTypes[0].name',
            label: 'wc.create.documentType',
            pattern: '^[s.]*([^s.][s.]*){0,100}$',
            type: 'text',
            isRequired: true,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: 'Length minimum is 3 and maximum is 100',
          },
          {
            name: 'description',
            jsonPath: 'DocumentTypes[0].description',
            label: 'wc.create.description',
            pattern: '^[s.]*([^s.][s.]*){0,250}$',
            type: 'text',
            isRequired: false,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: 'Length is more than 250',
          },
          {
            name: 'Active',
            jsonPath: 'DocumentTypes[0].active',
            label: 'wc.create.active',
            pattern: '',
            type: 'checkbox',
            isRequired: false,
            defaultValue: true,
            isDisabled: false,
            requiredErrMsg: '',
            patternErrMsg: '',
          },
        ],
      },
    ],
  },
};

export default dat;
