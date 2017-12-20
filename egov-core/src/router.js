import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './AuthRoute';

import Login from './components/contents/Login';
import Dashboard from './components/contents/Dashboard';
import NoMatch from './components/common/NoMatch';

import CS_WaterConnection from './components/non-framework/citizenServices/wc/create.js';
import CS_VIEW_WaterConnection from './components/non-framework/citizenServices/wc/view.js';
import CS_FireNoc from './components/non-framework/citizenServices/buildingPlan/create.js';
import CS_VIEW_FireNoc from './components/non-framework/citizenServices/buildingPlan/view.js';
import Payment from './components/non-framework/citizenServices/payment';
import ReceiptDownload from './components/non-framework/citizenServices/ReceiptDownload.js';
import CS_TradeLicense from './components/non-framework/citizenServices/tl/create.js';
import CS_VIEW_TradeLicense from './components/non-framework/citizenServices/tl/view.js';
import CertificateView from './components/non-framework/citizenServices/SRNView.js';

import NoDues from './components/non-framework/citizenServices/NoDues';
import PayTax from './components/non-framework/citizenServices/PayTax';

const base = '';

const Main = () => {
  return (
    <main style={{ marginBottom: '50px' }}>
      <Switch>
        <Route exact path={base + '/:tenantId?'} component={Login} />
        <Route exact path={base + '/prd/dashboard'} component={Dashboard} />
        <Route exact path={base + '/non-framework-cs/citizenServices/paytax/:status/:id/:paymentGateWayRes?'} component={PayTax} />
        <Route exact path={base + '/non-framework-cs/citizenServices/:moduleName/:status/:id/:paymentGateWayRes?'} component={NoDues} />
        <Route exact path={base + '/non-framework/citizenServices/create/:status/:id/:paymentGateWayRes?'} component={CS_WaterConnection} />
        <Route exact path={base + '/non-framework/citizenServices/view/:status/:id/:ackNo/:paymentGateWayRes?'} component={CS_VIEW_WaterConnection} />
        <Route exact path={base + '/non-framework/citizenServices/fireNoc/:status/:id/:paymentGateWayRes?'} component={CS_FireNoc} />
        <Route exact path={base + '/non-framework/citizenServices/fireNoc/:status/:id/:ackNo/:paymentGateWayRes?'} component={CS_VIEW_FireNoc} />
        <Route exact path={base + '/receipt/:page/:type/:cc/:sid'} component={ReceiptDownload} />
        <Route exact path={base + '/non-framework/citizenServices/tl/:status/:id/:paymentGateWayRes?'} component={CS_TradeLicense} />
        <Route exact path={base + '/payment/response/redirect/:msg'} component={Payment} />
        <Route exact path={base + '/non-framework/citizenServices/tl/:status/:id/:ackNo/:paymentGateWayRes?'} component={CS_VIEW_TradeLicense} />
        <Route exact path={base + '/service/request/view/:srn/:isCertificate'} component={CertificateView} />

        <Route component={NoMatch} />
      </Switch>
    </main>
  );
};

export default <Main />;
