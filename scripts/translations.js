import schemaBuilder from '@ormcz/schema-builder';

schemaBuilder.fetchTranslations({
  translOrgId: 'openstreetmap',
  translProjectId: 'id-editor',
  translResourceIds: ['presets'],
  translReviewedOnly: ['vi']
});
