import React from 'react';
import { Router, Redirect, Route, browserHistory, IndexRoute } from 'react-router';

// Docs
import App from './Index';
import GettingStarted from './GettingStarted/Index';
import Home from './Home/Index';

// Core Examples
import AlertExamples from './Components/Core/Alert/Index';
import AppDelegateExamples from './Components/Core/AppDelegate/Index';
import ArrangeExamples from './Components/Core/Arrange/Index';
import BadgeExamples from './Components/Core/Badge/Index';
import BaseExamples from './Components/Core/Base/Index';
import ButtonExamples from './Components/Core/Button/Index';
import ButtonGroupExamples from './Components/Core/ButtonGroup/Index';
import ContentContainerExamples from './Components/Core/ContentContainer/Index';
import DatePickerExamples from './Components/Core/DatePicker/Index';
import DemographicsBannerExamples from './Components/Core/DemographicsBanner/Index';
import FormExamples from './Components/Core/Form/Index';
import FormFieldExamples from './Components/Core/Form/Field';
import FormFieldsetExamples from './Components/Core/Form/Fieldset';
import FormInputExamples from './Components/Core/Form/Input';
import FormControlExamples from './Components/Core/Form/Control';
import FormNumberFieldExamples from './Components/Core/Form/NumberField';
import FormTextareaExamples from './Components/Core/Form/Textarea';
import FormTextareaFieldExamples from './Components/Core/Form/TextareaField';
import FormTextFieldExamples from './Components/Core/Form/TextField';
import FormSelectExamples from './Components/Core/Form/Select';
import FormSelectFieldExamples from './Components/Core/Form/SelectField';
import GridExamples from './Components/Core/Grid/Index';
import HeadingExamples from './Components/Core/Heading/Index';
import I18nExamples from './Components/Core/I18n/Index';
import IconExamples from './Components/Core/Icon/Index';
import ImageExamples from './Components/Core/Image/Index';
import ListExamples from './Components/Core/List/Index';
import ModalExamples from './Components/Core/Modal/Index';
import ModalMangerExamples from './Components/Core/ModalManager/Index';
import OverlayExamples from './Components/Core/Overlay/Index';
import ProgressBarExamples from './Components/Core/ProgressBar/Index';
import ResponsiveElementExamples from './Components/Core/ResponsiveElement/Index';
import SearchFieldExamples from './Components/Core/SearchField/Index';
import SlideGroupExamples from './Components/Core/SlideGroup/Index';
import SlidePanelExamples from './Components/Core/SlidePanel/Index';
import StatusExamples from './Components/Core/Status/Index';
import TableExamples from './Components/Core/Table/Index';
import TextExamples from './Components/Core/Text/Index';
import TimeInputExamples from './Components/Core/TimeInput/Index';
import ToggleExamples from './Components/Core/Toggle/Index';
import ToggleButtonExamples from './Components/Core/ToggleButton/Index';


// Clinical Examples
import ActionHeaderExamples from './Components/Clinical/ActionHeader/Index';
import ApplicationExamples from './Components/Clinical/Application/Index';
import DetailViewExamples from './Components/Clinical/DetailView/Index';
import ErrorViewExamples from './Components/Clinical/ErrorView/Index';
import HeaderExamples from './Components/Clinical/Header/Index';
import ItemCollectionExamples from './Components/Clinical/ItemCollection/Index';
import ItemDisplayExamples from './Components/Clinical/ItemDisplay/Index';
import ItemViewExamples from './Components/Clinical/ItemView/Index';
import LabelValueViewExamples from './Components/Clinical/LabelValueView/Index';
import NoDataViewExamples from './Components/Clinical/NoDataView/Index';

import Components from './Components/Index';

const DocSiteLayoutRoutes = () => (
  <Router history={browserHistory}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={App} >
      <Route path="/home" component={Home} />
      <Route path="/getting-started" component={GettingStarted} />
      <Redirect from="/components" to="/components/core/app-delegate" />
      <Route path="/components" component={Components}>
        <IndexRoute />

        <Route path="/components/core/alert" component={AlertExamples} />
        <Route path="/components/core/app-delegate" component={AppDelegateExamples} />
        <Route path="/components/core/arrange" component={ArrangeExamples} />
        <Route path="/components/core/badge" component={BadgeExamples} />
        <Route path="/components/core/base" component={BaseExamples} />
        <Route path="/components/core/button" component={ButtonExamples} />
        <Route path="/components/core/button-group" component={ButtonGroupExamples} />
        <Route path="/components/core/content-container" component={ContentContainerExamples} />
        <Route path="/components/core/datepicker" component={DatePickerExamples} />
        <Route path="/components/core/demographics-banner" component={DemographicsBannerExamples} />
        <Route path="/components/core/form" component={FormExamples} />
        <Route path="/components/core/form/field" component={FormFieldExamples} />
        <Route path="/components/core/form/fieldset" component={FormFieldsetExamples} />
        <Route path="/components/core/form/input" component={FormInputExamples} />
        <Route path="/components/core/form/control" component={FormControlExamples} />
        <Route path="/components/core/form/number-field" component={FormNumberFieldExamples} />
        <Route path="/components/core/form/textarea" component={FormTextareaExamples} />
        <Route path="/components/core/form/textarea-field" component={FormTextareaFieldExamples} />
        <Route path="/components/core/form/text-field" component={FormTextFieldExamples} />
        <Route path="/components/core/form/select" component={FormSelectExamples} />
        <Route path="/components/core/form/select-field" component={FormSelectFieldExamples} />
        <Route path="/components/core/grid" component={GridExamples} />
        <Route path="/components/core/heading" component={HeadingExamples} />
        <Route path="/components/core/i18n" component={I18nExamples} />
        <Route path="/components/core/icon" component={IconExamples} />
        <Route path="/components/core/image" component={ImageExamples} />
        <Route path="/components/core/list" component={ListExamples} />
        <Route path="/components/core/modal" component={ModalExamples} />
        <Route path="/components/core/modal-manager" component={ModalMangerExamples} />
        <Route path="/components/core/overlay" component={OverlayExamples} />
        <Route path="/components/core/progress-bar" component={ProgressBarExamples} />
        <Route path="/components/core/responsive-element" component={ResponsiveElementExamples} />
        <Route path="/components/core/search-field" component={SearchFieldExamples} />
        <Route path="/components/core/slide-group" component={SlideGroupExamples} />
        <Route path="/components/core/slide-panel" component={SlidePanelExamples} />
        <Route path="/components/core/status" component={StatusExamples} />
        <Route path="/components/core/table" component={TableExamples} />
        <Route path="/components/core/text" component={TextExamples} />
        <Route path="/components/core/time-input" component={TimeInputExamples} />
        <Route path="/components/core/toggle" component={ToggleExamples} />
        <Route path="/components/core/toggle-button" component={ToggleButtonExamples} />

        <Route path="/components/clinical/action-header" component={ActionHeaderExamples} />
        <Route path="/components/clinical/application" component={ApplicationExamples} />
        <Route path="/components/clinical/detail-view" component={DetailViewExamples} />
        <Route path="/components/clinical/error-view" component={ErrorViewExamples} />
        <Route path="/components/clinical/header" component={HeaderExamples} />
        <Route path="/components/clinical/item-collection" component={ItemCollectionExamples} />
        <Route path="/components/clinical/item-display" component={ItemDisplayExamples} />
        <Route path="/components/clinical/item-view" component={ItemViewExamples} />
        <Route path="/components/clinical/label-value-view" component={LabelValueViewExamples} />
        <Route path="/components/clinical/no-data-view" component={NoDataViewExamples} />
      </Route>
    </Route>
  </Router>
  );


export default DocSiteLayoutRoutes;
