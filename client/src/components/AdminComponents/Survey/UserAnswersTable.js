const UserAnswersTable = ({ title, answers }) => {
    return (
        <div className="container" >
            <h3 className="p-3 text-center">{title}</h3>
            <table className="table table-striped table-bordered">
                <tbody>
                {answers.map(user =>
                    <tr>
                        <td>{user} </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
export default UserAnswersTable;