import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ReadMe from 'terra-demographics-banner/docs/README.md';
import { version } from 'terra-demographics-banner/package.json';
import Markdown from 'terra-markdown';
import DemographicsBanner from 'terra-demographics-banner';
/* eslint-enable import/no-extraneous-dependencies */

// Examples
import DemographicsBannerAdditionalAges from 'terra-site/lib/examples/demographics-banner/DemographicsBannerAdditionalAges';
import DemographicsBannerAdditionalDetails from 'terra-site/lib/examples/demographics-banner/DemographicsBannerAdditionalDetails';
import DemographicsBannerBasic from 'terra-site/lib/examples/demographics-banner/DemographicsBannerBasic';
import DemographicsBannerDeceased from 'terra-site/lib/examples/demographics-banner/DemographicsBannerDeceased';

const DemographicsBannerExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1>Basic Demographics Banner</h1>
    <DemographicsBannerBasic />
    <h1>Demographics Banner with Missing Data</h1>
    <DemographicsBanner />
    <h1>Deceased Demographics Banners</h1>
    <DemographicsBannerDeceased />
    <h1>Demographics Banner with Gestational and Post Menstrural ages</h1>
    <DemographicsBannerAdditionalAges />
    <h1>Demographics Banner with Additional Details</h1>
    <DemographicsBannerAdditionalDetails />
  </div>
);

export default DemographicsBannerExamples;
