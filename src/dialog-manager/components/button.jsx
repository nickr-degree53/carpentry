import React from 'react';

export default class Button extends React.Component {

	constructor (props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick () {
		this.props.onClick(this.props.buttonData.id);
	}

	render () {
		return (
			<button key={this.props.buttonData.id} onClick={this.onClick}>
				{this.props.buttonData.text}
			</button>
		);
	}
}

Button.defaultProps = {
	onClick: () => { /* no-op */ },
	buttonData: {}
};
