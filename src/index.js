/*
 * @file: index.js
 * @description: App's root file to connect apollo provider and redux store with app.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */
import React, { Component } from "react";
import { Alert, NetInfo, Platform, View } from "react-native";
import { Provider } from 'react-redux'
import configureStore from "./config/configureStore";
import { checkPermissions } from "./utilities/Locations";
import { ApolloProvider } from 'react-apollo';
import configureClient, { getGraphQlClient, getHeaderDetails } from "./config/apolloClientConfig";
import { pushNotificationInit, pushNotificationRemove } from "./utilities/PushNotification";
import Root from './Root';
import Notification from 'react-native-in-app-notification';
import Constants from './constants';

/* *
 * @function: Configuring redux store 
 * */
const { store, persistor } = configureStore();

/* *
 * @function: Configuring graphql client 
 * */
const client = getGraphQlClient();
if (!client) {
	client = configureClient(store);
}

/*
 * Main component
 * */
class Application extends Component {

	constructor(props) {
		super(props);
		/* *
		 * @function: Initiliazing location utility
		 * */
		checkPermissions(store);
		console.disableYellowBox = true;
		this.notification = null;
	}

	componentDidMount() {
		this.handleNetwork();
		this.initilizePushNotification();
	}

	componentWillUnmount() {
		//pushNotificationRemove(); // Stop listening push notification events
	}

	/* *
	* @function: Initiliazing push notification utility
	* */
	initilizePushNotification = () => {
		let context = this;
		if (Platform.OS === "ios") {
			pushNotificationInit(store)
		} else {
			pushNotificationInit(store, this.notification)
		}
	}

	/* *
	* @function: Initiliazing network utility.
	* */

	handleNetwork = () => {
		let context = this;
		function handleFirstConnectivityChange(isConnected) {
			NetInfo.isConnected.removeEventListener('change', handleFirstConnectivityChange);
		}
		NetInfo.isConnected.addEventListener('change', handleFirstConnectivityChange);
		NetInfo.isConnected.fetch().then(isConnected => { });
	}

	/* *
	 * @function: Default render function
	 * */
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ApolloProvider client={client}>
					<Provider store={store}>
						<Root />
					</Provider>
				</ApolloProvider>
				{
					Platform.OS !== "android" &&
					<Notification
						backgroundColour={Constants.Colors.White}
						ref={(ref) => { this.notification = ref; }}
					/>
				}
			</View>
		)
	}
}

export default Application;