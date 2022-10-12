// import { View, ImageBackground } from "react-native";
import { useSx, useDripsyTheme, View, H1, P, Row, A } from "dripsy";
import { Text } from "react-native-paper";
import { TextLink } from "solito/link";
import { MotiLink } from "solito/moti";
import Logo from "../../components/common/Logo";
import { ImageBackground } from "react-native";

export function HomeScreen() {
	const sx = useSx();
	const { theme } = useDripsyTheme();

	return (
		<View
			sx={{ flex: 1, justifyContent: "center", alignItems: "center", p: 16 }}
		>
			<ImageBackground
				source={require("../../Background-image.96c3b8fe.png")}
				resizeMode="cover"
				style={{
					width: "100%",
					height: "100%",
					alignItems: "center",
					justifyContent: "flex-start",
				}}
			>
				<Logo />
				<Text
					variant="displaySmall"
					style={{ fontWeight: "bold", color: theme.colors?.primary as string }}
				>
					Welcome!
				</Text>
				<Text>Create your new Vodacom account</Text>

				<View sx={{ height: 32 }}></View>

				<View
					sx={{
						width: "100%",
						maxWidth: 600,
						alignItems: "center",
						backgroundColor: theme.colors?.background as string,
						borderRadius: 10,
					}}
				>
					<Text variant="headlineSmall">Create Account</Text>
					{/* Form Header */}
					<View style={{ flexDirection: "row" }}>
						<Text variant="labelLarge" style={{ marginRight: 5 }}>
							Already have an account?
						</Text>
						<TextLink
							href="/user/fernando"
							textProps={{
								style: { color: theme.colors?.primary as string },
							}}
						>
							Log in
						</TextLink>
					</View>
					{/* Form Inputs */}
					<View style={{ width: "100%" }}>
						{/* <TextInput label="First Name" /> */}
					</View>
				</View>
				<View sx={{ height: 32 }} />
			</ImageBackground>
		</View>
	);
}
