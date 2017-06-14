import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './site.scss';

// Examples
import ArrangeExamples from '../../Arrange/components/Index';
import BadgeExamples from '../../Badge/components/Index';
import BaseExamples from '../../Base/components/Index';
import ButtonExamples from '../../Button/components/Index';
import ButtonGroupExamples from '../../ButtonGroup/components/Index';
import ContentContainerExamples from '../../ContentContainer/components/Index';
import DatePickerExamples from '../../DatePicker/components/Index';
import DemographicsBannerExamples from '../../DemographicsBanner/components/Index';
import FormExamples from '../../Form/components/Index';
import GridExamples from '../../Grid/components/Index';
import I18nExamples from '../../I18n/components/Index';
import IconExamples from '../../Icon/components/Index';
import ImageExamples from '../../Image/components/Index';
import ListExamples from '../../List/components/Index';
import ModalExamples from '../../Modal/components/Index';
import ProgressBarExamples from '../../ProgressBar/components/Index';
import ResponsiveElementExamples from '../../ResponsiveElement/components/Index';
import SlidePanelExamples from '../../SlidePanel/components/Index';
import StatusExamples from '../../Status/components/Index';
import TableExamples from '../../Table/components/Index';
import DocSiteLayout from './Index';

class DocSiteLayoutRoutes extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={DocSiteLayout}>
          <IndexRoute />
          <Route path="/components/core/arrange" component={ArrangeExamples} />
          <Route path="/components/core/badge" component={BadgeExamples} />
          <Route path="/components/core/base" component={BaseExamples} />
          <Route path="/components/core/button" component={ButtonExamples} />
          <Route path="/components/core/button-group" component={ButtonGroupExamples} />
          <Route path="/components/core/content-container" component={ContentContainerExamples} />
          <Route path="/components/core/datepicker" component={DatePickerExamples} />
          <Route path="/components/core/demographics-banner" component={DemographicsBannerExamples} />
          <Route path="/components/core/form" component={FormExamples} />
          <Route path="/components/core/grid" component={GridExamples} />
          <Route path="/components/core/i18n" component={I18nExamples} />
          <Route path="/components/core/icon" component={IconExamples} />
          <Route path="/components/core/image" component={ImageExamples} />
          <Route path="/components/core/list" component={ListExamples} />
          <Route path="/components/core/modal" component={ModalExamples} />
          <Route path="/components/core/progress-bar" component={ProgressBarExamples} />
          <Route path="/components/core/responsive-element" component={ResponsiveElementExamples} />
          <Route path="/components/core/slide-panel" component={SlidePanelExamples} />
          <Route path="/components/core/status" component={StatusExamples} />
          <Route path="/components/core/table" component={TableExamples} />
        </Route>
      </Router>
    );
  }
}

export default DocSiteLayoutRoutes;
