// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  xlgenSidebar: [
    'index',
    'overall-approach',
    'xl-ingest',
    {
      type: 'category',
      label: 'Pipeline stages',
      collapsed: false,
      items: [
        'xl-table',
        'xl-grammar',
        'xl-dag',
        'xl-ontology',
        'xl-summarize',
      ],
    },
  ],
};

export default sidebars;
