import {connect} from "react-redux";

export const Dashboard = () => {

  return (
    <div>
      'Hello, this is me.'
    </div>
  );

};

const mapStateToProps = ({ }) => ({
});

export default connect(mapStateToProps)(Dashboard);
