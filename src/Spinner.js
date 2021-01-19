import React from "react";

const Spinner = ({ message }) => {
	return <div class="ui active dimmer">
			<div class="ui text loader">{message}</div>
	</div>
}

export default Spinner;