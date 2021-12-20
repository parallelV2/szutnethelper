import InfoBoard from '../InfoBoard';
import ConnectBtn from '../ConnectBtn';
import Announcement from '../Announcement';
import NetTable from '../NetTable';
import './index.less';

const Main = () => (
  <div className="main w-screen flexColumn mt-8">
    <div className="flexRow mb-6">
      <div className="w-80 mr-2 shadow-md shadowBox">
        <InfoBoard />
      </div>
      <div className="table ml-2 shadow-md shadowBox">
        <NetTable />
      </div>
    </div>
    <div className="flexRow">
      <div className="w-80 mr-2 shadow-md shadowBox">
        <Announcement />
      </div>
      <div className="ConnectBtnWrapper ml-2 shadow-md shadowBox">
        <ConnectBtn />
      </div>
    </div>
  </div>
);
export default Main;
