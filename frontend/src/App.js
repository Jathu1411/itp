import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "react-bootstrap/Form";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";

//import Login from "./account management/pages/Login";

// import TcMyAccount from "./ticket clerk/pages/TcMyAccount";

import Home from "./clinic management/Home";
import clinicForm from "./clinic management/clinicForm";
import TransForm from "./ward management/ward incharge/Transferform";
//import patDetailsCli from "./clinic management/patDetailsCli";
import Check from "./clinic management/patDetailsCli";
import CliForm from "./clinic management/clinicForm";

import WardPres from "./ward management/Ward Doctor/wardPrescription";
import DrugIssue from "./ward management/NursingStaff/drugissue";
import DisForm from "./ward management/ward incharge/discharge";
import DrugAdd from "./ward management/NursingStaff/druggadd";
import ViewDrug from "./ward management/NursingStaff/viewDrug";
import EditDrug from "./ward management/NursingStaff/editdrug";
import viewWp from './ward management/viewPat'
import Navbar from './ward management/NursingStaff/Navbar'
import DietAdd from './ward management/WardAttendant/wardDiet'
import DietView from './ward management/WardAttendant/viewDiet'
import DietEdit from './ward management/WardAttendant/EditDiet'
import TransList from './ward management/ward incharge/transferlist'
import TransEdit from './ward management/ward incharge/editTrans';
import DischargeList from './ward management/ward incharge/disList.jsx';

import viewDrugIssue from './ward management/NursingStaff/viewdrugissue'
import footer from './ward management/footer';
import Visit from './ward management/Ward Doctor/visit'
import wardPresc from './ward management/Ward Doctor/wardPrescription'
import clinicpatadd from './ward management/addwp'


import clinicDocNav from './clinic management/ClinicDoctor/clinicDocNav'
import clinicDocPres from './clinic management/ClinicDoctor/clinicPrescription'
import viewclinicpres from './clinic management/ClinicDoctor/viewpres'

import AddWardPat from './ward management/addwardpat'
import pdf from './ward management/ward incharge/pdf'
import viewwardpres from './ward management/Ward Doctor/viewWardpres'
import viewVisit from './ward management/Ward Doctor/viewvisit'


// DashBoards
import clinicDocDB from './clinic management/ClinicDoctor/clinicDocDB' //checked
import wardDocDB from './ward management/Ward Doctor/wardDocDB'//done
import NSDB from './ward management/NursingStaff/NursingStaffDB.jsx'//done
import wardAttendantDB from './ward management/WardAttendant/wardAttendantDB'//done
import WardinchargeDB from "./ward management/ward incharge/wardinch";//done




// import TcSearchAllPatients from "./ticket clerk/pages/TcSearchAllPatients";
// import TcViewPatientDetails from "./ticket clerk/pages/TcViewPatientDetails";
// import TcEditPatientDetails from "./ticket clerk/pages/TcEditPatientDetails";
//ViewDrug

const App = () => {
  return (            
    <Router>
      <Switch>
        <Route path="/" exact component={wardDocDB}></Route>
        <Route path="/drugissue" exact component={DrugIssue}></Route>
        <Route path="/updatedrug/:id" exact component={EditDrug}></Route>
        <Route path="/updatediet/:id" exact component={DietEdit}></Route>
        <Route path="/updateransfer/:id" exact component={DietEdit}></Route>
        <Route path="/viewdrugissue" exact component={viewDrugIssue}></Route>
        <Route path="/clinicpreslist" exact component={viewclinicpres}></Route>
        <Route path="/issuediet" exact component={DietAdd}></Route>
        <Route path="/viewdiet" exact component={DietView}></Route>
        <Route path="/viewwardpres" exact component={viewwardpres}></Route>
        <Route path="/viewwardvisit" exact component={viewVisit}></Route>






        <Route path="/drugadd" exact component={DrugAdd}></Route>
        <Route path="/druglist" exact component={ViewDrug}></Route>
        <Route path="/discharge" exact component={DisForm}></Route>
        <Route path="/transfer" exact component={TransForm}></Route>
        <Route path="/transferlog" exact component={TransList}></Route>
        <Route path="/dischargelog" exact component={DischargeList}></Route>



        
        <Route path="/wardprescription" exact component={wardPresc}></Route>
        <Route path="/visit" exact component={Visit}></Route>
        <Route path="/clinicpresc" exact component={clinicDocPres}></Route>




      </Switch>
    </Router>
  );
};

export default App;

/*
login "/"

Ticket clerk
dashboard "/:uid"
my account "/:uid/account"
view all patients "/opd_patients"
search all patients "/:nic/opd_patients"
view patient details "/:nic/opd_details"
edit patient details "/:nic/edit_opd_details"
*/

/*
<Route path="/:uid" exact>
          <TcDashboard />
        </Route>
<Route path="/:uid/account" exact>
          <TcMyAccount />
        </Route>
        <Route path="/:nic/opd_patients" exact>
          <TcSearchAllPatients />
        </Route>
        <Route path="/:nic/opd_details" exact>
          <TcViewPatientDetails />
        </Route>
        <Route path="/:nic/edit_opd_details" exact>
          <TcEditPatientDetails />
</Route>
*/
