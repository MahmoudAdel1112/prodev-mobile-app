// App.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons"; // Using Expo's built-in vector icons

// Welcome Screen Component
const WelcomeScreen = ({ onContinue }) => {
  return (
    <View style={styles.welcomeContainer}>
      <Image
        source={{ uri: "https://picsum.photos/200/300 " }}
        style={styles.welcomeImage}
        resizeMode="cover"
      />
      <Text style={styles.welcomeTitle}>Welcome to Brew Haven</Text>
      <Text style={styles.welcomeSubtitle}>
        Your favorite coffee shop, now at your fingertips.
      </Text>
      <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

// Home Screen Component
const HomeScreen = () => {
  return (
    <ScrollView style={styles.screenContainer}>
      <Image
        source={{ uri: "https://picsum.photos/400/200 " }}
        style={styles.bannerImage}
      />

      <Text style={styles.sectionTitle}>Featured Products</Text>

      {/* Featured Item 1 */}
      <View style={styles.featuredItem}>
        <Image
          source={{ uri: "https://picsum.photos/200/300 " }}
          style={styles.featuredItemImage}
        />
        <View style={styles.featuredItemContent}>
          <Text style={styles.featuredItemTitle}>Caramel Macchiato</Text>
          <Text style={styles.featuredItemDescription}>
            Espresso shots with steamed milk and a caramel drizzle.
          </Text>
          <Text style={styles.featuredItemPrice}>$4.50</Text>
        </View>
      </View>

      {/* Featured Item 2 */}
      <View style={styles.featuredItem}>
        <Image
          source={{ uri: "https://picsum.photos/200/301 " }}
          style={styles.featuredItemImage}
        />
        <View style={styles.featuredItemContent}>
          <Text style={styles.featuredItemTitle}>Matcha Latte</Text>
          <Text style={styles.featuredItemDescription}>
            Smooth and creamy green tea latte made with premium matcha.
          </Text>
          <Text style={styles.featuredItemPrice}>$4.25</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Our Story</Text>
      <Text style={styles.storyText}>
        At Brew Haven, we're passionate about crafting the perfect cup of
        coffee. Our beans are ethically sourced from small farms around the
        world, and our baristas are trained to the highest standards. Come
        experience the difference that care and craftsmanship make.
      </Text>
    </ScrollView>
  );
};

// Menu Screen Component
const MenuScreen = () => {
  const categories = [
    {
      name: "Espresso",
      items: [
        {
          name: "Espresso",
          price: "$2.50",
          description: "Classic double shot of espresso",
        },
        {
          name: "Cappuccino",
          price: "$3.50",
          description: "Espresso with steamed milk foam",
        },
        {
          name: "Latte",
          price: "$3.75",
          description: "Espresso with steamed milk",
        },
      ],
    },
    {
      name: "Brewed Coffee",
      items: [
        {
          name: "Drip Coffee",
          price: "$2.00",
          description: "Freshly brewed daily",
        },
        {
          name: "French Press",
          price: "$3.00",
          description: "Rich and full-bodied coffee",
        },
      ],
    },
    {
      name: "Tea & Others",
      items: [
        {
          name: "Green Tea",
          price: "$2.50",
          description: "Freshly brewed green tea",
        },
        {
          name: "Hot Chocolate",
          price: "$3.00",
          description: "Creamy and rich hot chocolate",
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.screenContainer}>
      {categories.map((category, index) => (
        <View key={index} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.name}</Text>
          {category.items.map((item, itemIndex) => (
            <View key={itemIndex} style={styles.menuItem}>
              <View style={styles.menuItemText}>
                <Text style={styles.menuItemName}>{item.name}</Text>
                <Text style={styles.menuItemDescription}>
                  {item.description}
                </Text>
              </View>
              <Text style={styles.menuItemPrice}>{item.price}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

// Order Screen Component
const OrderScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.orderCard}>
        <Image
          source={{ uri: "https://picsum.photos/200/302 " }}
          style={styles.orderImage}
        />
        <Text style={styles.orderTitle}>Order Now</Text>
        <Text style={styles.orderDescription}>
          Place your order and pick it up at the counter.
        </Text>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Start Order</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.orderCard}>
        <Image
          source={{ uri: "https://picsum.photos/200/303 " }}
          style={styles.orderImage}
        />
        <Text style={styles.orderTitle}>Rewards</Text>
        <Text style={styles.orderDescription}>
          Join our loyalty program and earn rewards.
        </Text>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Location Screen Component
const LocationScreen = () => {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.locationContainer}>
        <Image
          source={{ uri: "https://picsum.photos/400/300 " }}
          style={styles.mapImage}
        />
        <Text style={styles.locationTitle}>Our Location</Text>
        <Text style={styles.locationAddress}>
          123 Main Street, Cityville, State 12345
        </Text>
        <Text style={styles.locationHoursTitle}>Hours of Operation</Text>
        <View style={styles.hoursContainer}>
          {[
            { day: "Monday", hours: "7:00 AM - 6:00 PM" },
            { day: "Tuesday", hours: "7:00 AM - 6:00 PM" },
            { day: "Wednesday", hours: "7:00 AM - 6:00 PM" },
            { day: "Thursday", hours: "7:00 AM - 6:00 PM" },
            { day: "Friday", hours: "7:00 AM - 7:00 PM" },
            { day: "Saturday", hours: "8:00 AM - 5:00 PM" },
            { day: "Sunday", hours: "9:00 AM - 4:00 PM" },
          ].map((item, index) => (
            <View key={index} style={styles.hourRow}>
              <Text style={styles.hourDay}>{item.day}</Text>
              <Text style={styles.hourTime}>{item.hours}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

// Profile Screen Component
const ProfileScreen = () => {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: "https://picsum.photos/200/304 " }}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>john.doe@example.com</Text>
      </View>

      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Name</Text>
          <Text style={styles.settingValue}>John Doe</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Email</Text>
          <Text style={styles.settingValue}>john.doe@example.com</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Phone</Text>
          <Text style={styles.settingValue}>+1 (555) 123-4567</Text>
        </View>
      </View>

      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Default Order Type</Text>
          <Text style={styles.settingValue}>In-store Pickup</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Payment Method</Text>
          <Text style={styles.settingValue}>Credit Card</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Bottom Navigation Component
const BottomNav = ({ activeScreen, onNavigate }) => {
  const navItems = [
    { name: "home", label: "Home", icon: "home" },
    { name: "menu", label: "Menu", icon: "restaurant-menu" },
    { name: "order", label: "Order", icon: "shopping-cart" },
    { name: "location", label: "Location", icon: "location-on" },
    { name: "profile", label: "Profile", icon: "person" },
  ];

  return (
    <View style={styles.bottomNav}>
      {navItems.map((item) => {
        const isActive = activeScreen === item.name;
        return (
          <TouchableOpacity
            key={item.name}
            style={styles.navItem}
            onPress={() => onNavigate(item.name)}
          >
            <Icon
              name={item.icon}
              size={24}
              color={isActive ? "#6B46C1" : "#666"}
            />
            <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentScreen, setCurrentScreen] = useState("home");

  const handleContinue = () => {
    setShowWelcome(false);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen />;
      case "menu":
        return <MenuScreen />;
      case "order":
        return <OrderScreen />;
      case "location":
        return <LocationScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  if (showWelcome) {
    return <WelcomeScreen onContinue={handleContinue} />;
  }

  return (
    <View style={styles.container}>
      {renderScreen()}
      <BottomNav activeScreen={currentScreen} onNavigate={setCurrentScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  welcomeImage: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    marginBottom: 30,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#6B46C1",
  },
  welcomeSubtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  continueButton: {
    backgroundColor: "#6B46C1",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  screenContainer: {
    flex: 1,
    padding: 20,
  },
  bannerImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  featuredItem: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  featuredItemImage: {
    width: 120,
    height: 120,
  },
  featuredItemContent: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  featuredItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  featuredItemDescription: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666",
  },
  featuredItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6B46C1",
  },
  storyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
    marginBottom: 25,
  },
  categoryContainer: {
    marginBottom: 25,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#6B46C1",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
    paddingVertical: 10,
  },
  menuItemText: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  menuItemDescription: {
    fontSize: 14,
    color: "#666",
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6B46C1",
  },
  orderCard: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  orderImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  orderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  orderDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 15,
    color: "#666",
  },
  orderButton: {
    backgroundColor: "#6B46C1",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  orderButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  locationContainer: {
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  locationTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  locationAddress: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  locationHoursTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#333",
  },
  hoursContainer: {
    width: "100%",
  },
  hourRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  hourDay: {
    fontSize: 16,
    color: "#333",
  },
  hourTime: {
    fontSize: 16,
    color: "#666",
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    marginBottom: 10,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  profileEmail: {
    fontSize: 16,
    color: "#666",
  },
  settingsContainer: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  settingLabel: {
    fontSize: 16,
    color: "#666",
  },
  settingValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  navLabelActive: {
    color: "#6B46C1",
    fontWeight: "bold",
  },
});
