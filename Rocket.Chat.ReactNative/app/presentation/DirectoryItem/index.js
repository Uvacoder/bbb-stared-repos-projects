import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Touch from '../../utils/touch';
import Avatar from '../../containers/Avatar';
import RoomTypeIcon from '../../containers/RoomTypeIcon';
import styles, { ROW_HEIGHT } from './styles';
import { themes } from '../../constants/colors';

export { ROW_HEIGHT };

const DirectoryItemLabel = React.memo(({ text, theme }) => {
	if (!text) {
		return null;
	}
	return <Text style={[styles.directoryItemLabel, { color: themes[theme].auxiliaryText }]}>{text}</Text>;
});

const DirectoryItem = ({
	title, description, avatar, onPress, testID, style, rightLabel, type, rid, theme, teamMain
}) => (
	<Touch
		onPress={onPress}
		style={{ backgroundColor: themes[theme].backgroundColor }}
		testID={testID}
		theme={theme}
	>
		<View style={[styles.directoryItemContainer, styles.directoryItemButton, style]}>
			<Avatar
				text={avatar}
				size={30}
				type={type}
				rid={rid}
				style={styles.directoryItemAvatar}
			/>
			<View style={styles.directoryItemTextContainer}>
				<View style={styles.directoryItemTextTitle}>
					<RoomTypeIcon type={type} teamMain={teamMain} theme={theme} />
					<Text style={[styles.directoryItemName, { color: themes[theme].titleText }]} numberOfLines={1}>{title}</Text>
				</View>
				{ description ? <Text style={[styles.directoryItemUsername, { color: themes[theme].auxiliaryText }]} numberOfLines={1}>{description}</Text> : null }
			</View>
			<DirectoryItemLabel text={rightLabel} theme={theme} />
		</View>
	</Touch>
);

DirectoryItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	avatar: PropTypes.string,
	type: PropTypes.string,
	onPress: PropTypes.func.isRequired,
	testID: PropTypes.string.isRequired,
	style: PropTypes.any,
	rightLabel: PropTypes.string,
	rid: PropTypes.string,
	theme: PropTypes.string,
	teamMain: PropTypes.bool
};

DirectoryItemLabel.propTypes = {
	text: PropTypes.string,
	theme: PropTypes.string
};

export default DirectoryItem;
