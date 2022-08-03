import {connect} from "react-redux";

const LeaderboardComponent = ({users}) => {
  return (
    <div>
      <h1>Leaderboard</h1>

      <table>
        <thead>
        <tr>
          <th>Username</th>
          <th>Answered question</th>
          <th>Created question</th>
        </tr>
        </thead>
        <tbody>
        {
          users.map((user) => (
            <tr key={user.id}>
              <td>
                <span className="font-bold">{user.name}</span>
                <br/>{user.id}</td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({users}) => ({
  users: Object.values(users).sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length),
});

export default connect(mapStateToProps)(LeaderboardComponent);
