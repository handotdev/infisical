import SecurityClient from "../../../components/utilities/SecurityClient";
import { PATH } from "../../../const";

/**
 * This route lets us rename a certain workspace.
 * @param {*} req
 * @param {*} res
 * @returns
 */
const renameWorkspace = (workspaceId, newWorkspaceName) => {
	return SecurityClient.fetchCall(PATH + "/api/v1/workspace/" + workspaceId + "/name", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: newWorkspaceName,
		}),
	})
	.then(async res => {
		if (res.status == 200) {
			return res;
		} else {
			console.log('Failed to rename a project');
		}
	})
};

export default renameWorkspace;
