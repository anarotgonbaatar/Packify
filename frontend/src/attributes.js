import { FaSun, FaCloud, FaWind, FaCloudRain, FaRegSnowflake, FaPaw, FaPills, FaWheelchair } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'
import { IoMale, IoFemale } from "react-icons/io5"

export const sexes = [
    { value: "Male", icon: <IoMale/> },
    { value: "Female", icon: <IoFemale/> },
]

export const weathers = [
    { value: 'Sunny', icon: <FaSun/> },
    { value: 'Windy', icon: <FaWind/> },
    { value: 'Cloudy', icon: <FaCloud/> },
    { value: 'Rainy', icon: <FaCloudRain/> },
    { value: 'Snowy', icon: <FaRegSnowflake/> },
]

export const activities = [
    { group: "Outdoors", activities: ["Photography", "Road Trip", "Hiking", "Camping", "Backpacking", "Picnicking", "Painting/Drawing Nature", "Treasure Hunting"] },
    { group: "Water Activities", activities: ["Swimming", "Snorkeling", "Scuba Diving", "Fishing", "Kayaking", "Surfing", "Paddleboarding"] },
    { group: "Mountain Activities", activities: ["Rock Climbing", "Skiing", "Snowboarding", "Mountain Biking", "Horseback Riding", "Caving", "Mountaineering", "Paragliding"] },
    { group: "Motorsports", activities: ["Motorcycling", "Off-roading", "ATV Riding", "Snowmobiling"] },
    { group: "Athletic & Fitness", activities: ["Running", "Cycling", "Trail Running", "Yoga", "Meditation"] },
    { group: "Hunting & Wildlife", activities: ["Hunting", "Bird Watching", "Wildlife Tracking", "Foraging", "Insect Collecting"] },
]

export const specialNeeds = [
    { value: "Medication", icon: <FaPills/> },
    { value: "Supplements", icon: <FaPills/> },
    { value: "Medical Equipment", icon: <FaWheelchair/> },
]

export const pets = [
    { value: "Yes", icon: <FaPaw/> },
    { value: "No", icon: <FaPerson/> },
]