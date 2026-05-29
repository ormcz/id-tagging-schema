import schemaBuilder from '@ormcz/id-schema-builder';

schemaBuilder.fetchTranslations({
  translOrgId: 'openstreetmap',
  translProjectId: 'id-editor',
  translResourceIds: ['presets'],
  translReviewedOnly: ['vi']
});
