// @ts-nocheck
import { useLocation } from 'react-router-dom';
import MenuSidebar from "../../components/Sidebar";
import { useContext } from "react";
import {ResultsContext} from '../../contexts/ResultContext'



const History: React.FC = () => {
  const results = useContext(ResultsContext); // Access context value correctly

  console.log('history component --->', results)

  return (
    <div className="dashboard-container">
      <div>
        <MenuSidebar />
      </div>
      <div className="dashboard-content">
        <h1>History feature in development</h1>
        <h1>Check back soon!</h1>
        {/* {results} */}
      </div>
    </div>
  )
}

export default History;