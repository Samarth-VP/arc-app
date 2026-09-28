import { ScrollView, View, Text, StyleSheet, Linking } from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { colors, fonts } from "@/constants/theme";
import { ARC_WEBSITE } from "@/constants/links";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { ArcLogo } from "@/components/ArcLogo";
import { TierCard } from "@/components/TierCard";
import { membershipTiers } from "@/data/membershipTiers";

export default function MembershipScreen() {
  const router = useRouter();
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
    <ArrowLeft size={18} color={colors.paper} onPress={() => router.back()} />
    <Text style={styles.eyebrow}>Membership</Text>
    <View style={styles.headingRow}>
      <Text style={styles.h1}>Join the regenerative movement</Text>
      <ArcLogo />
    </View>
    <Text style={styles.body}>Compare ARC membership tiers and explore their benefits. Complete registration and payment on the ARC website.</Text>
    <Text style={styles.note}>Pricing and benefits checked September 28, 2026. Current offers and eligibility are confirmed on the website.</Text>
    <View style={styles.tiers}>
      {membershipTiers.map((tier) => <TierCard key={tier.id} tier={tier} isCurrent={false} onSelect={() => Linking.openURL(`${ARC_WEBSITE}/signup?type=${tier.websiteTier}`)} />)}
    </View>
    <Text style={styles.sectionTitle}>Membership agreements</Text>
    <Text style={styles.body}>Review ARC’s agreements before joining.</Text>
    <PrimaryButton label="Read MOU" icon="none" onPress={() => router.push("/legal/mou")} />
    <SecondaryButton label="Read NDA / NCC" onPress={() => router.push("/legal/nda")} style={{ marginTop: 10 }} />
    <SecondaryButton label="Continue browsing" onPress={() => router.back()} style={{ marginTop: 10 }} />
  </ScrollView>;
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bgDeep },
  content: { padding: 20, paddingTop: 28, paddingBottom: 40 },
  tiers: { gap: 16 },
  note: { fontFamily: fonts.body, fontSize: 12, lineHeight: 18, color: colors.textMuted, marginBottom: 20 },
  sectionTitle: { fontFamily: fonts.display, fontSize: 22, color: colors.paper, marginTop: 28, marginBottom: 10 },
  eyebrow: { fontFamily: fonts.mono, fontSize: 10.5, color: colors.gold, letterSpacing: 0.6, textTransform: "uppercase", marginTop: 28, marginBottom: 7 },
  headingRow: { flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 12, maxWidth: 420 },
  h1: { flex: 1, fontFamily: fonts.display, fontSize: 28, lineHeight: 34, color: colors.paper },
  body: { fontFamily: fonts.body, fontSize: 13.5, lineHeight: 21, color: colors.textMuted, marginBottom: 22 },
  url: { fontFamily: fonts.mono, fontSize: 10, color: colors.textMuted, marginTop: 20 },
});
