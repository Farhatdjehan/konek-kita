import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import USERS from '../../common/data/userDummyData';
import { dashboardMenu, generalMenu, personalMenu } from '../../menu';

export const UserAvatar = ({ srcSet, src }) => {
	return (
		<div className='user-avatar'>
			<img srcSet={srcSet} src={src} alt='Avatar' width={128} height={128} />
		</div>
	);
};
UserAvatar.propTypes = {
	src: PropTypes.string.isRequired,
	srcSet: PropTypes.string,
};
UserAvatar.defaultProps = {
	srcSet: null,
};

const User = () => {
	const history = useHistory();

	return (
		<div
			role='presentation'
			className='user'
			onClick={() => history.push(`${generalMenu.profilId.path}`)}>
			<UserAvatar srcSet={USERS.JOHN.srcSet} src={USERS.JOHN.src} />
			<div className='user-info'>
				<div className='user-name'>{`${USERS.JOHN.name} ${USERS.JOHN.surname}`}</div>
				<div className='user-sub-title'>{USERS.JOHN.position}</div>
			</div>
		</div>
	);
};

export default User;
