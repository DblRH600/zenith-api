import express from 'express'
import Product from '../models/Product.js'

const router = express.Router()

/**
 * POST route to create new product(s)
 */

/**
 * GET route to fetch a product by ID
 */

/**
 * PUT route to update a product by ID
 */

/**
 * DELETE route to delete a product by ID
 */

/**
 * GET route to query and filter product information
 * @description This route will allow users to query products based on the various schema fields
 */

/**
 * GET route to seed sample product data
 * @description This route will populate the db with sample data for testing
 */
router.get('db/seed', async (req, res) => {
  try {
    await Product.deleteMany({})

    const sampleProducts = [
      {
        name: 'VF-1S Valkyrie',
        description: 'A VF-1 variant with the heaviest weapon loadout.',
        price: 70000,
        category: 'vehicles',
        inStock: true,
        tags: [
          'The VF-1S mounts four of the Mauler series RÖV-20 anti-aircraft laser cannons and enjoys several upgrades in addition to firepower.',
          'The engines are improved Shinnakasu Heavy Industry/P&W/Roice FF-2001D models resulting in measurably improved thrust and an enhanced avionics package is featured in each VF-1S.'
        ]
      },
      {
        name: 'Super Pack System',
        description:
          "A specialized system designed to enhance VF-1's defensive and armaments capabilities in Battroid Mode",
        price: 12000,
        category: 'armaments',
        inStock: true,
        tags: [
          'GBP-1S Armored Pack System',
          "A customized VF-1S painted in Skull Squadron's marking with yellow highlights."
        ]
      },
      {
        name: 'GU-11 Gunpod',
        description:
          'A tri-barrel gatling type weapon that shoots 55m caliber round.',
        price: 5500,
        category: 'armaments',
        inStock: true,
        tags: [
          'This weapon had the capacity of 200 rounds with rate of fire 1200 per second.'
        ]
      },
      {
        name: 'VF-1J Amrmored Valkyrie',
        description:
          'The VF-1J Armored Valkyrie is a heavily armored configuration of VF-1J Valkyrie equipped with the GBP-1S Armored Pack System.',
        price: 93000,
        category: 'vehicles',
        inStock: false,
        tags: [
          'This particular equipment was developed in parallel with the VF-1 Valkyrie series to mitigate its weakness, while also enhanced its overall defensive and ground combat capabilities for the Battroid mode.',
          'Despite the GBP-1S impressive firepower and defensive capabilities it had several weakness and disadvantages.'
        ]
      },
      {
        name: 'Zentraedi Flight Suit',
        description:
          'As a part of the development of the Zentraedi military, the Robotech Masters created a flight suit tailored to the artificial physiologies of their pilots.',
        price: 1170,
        category: 'equipment',
        inStock: false,
        tags: [
          'Its primary purpose was to act as a G-suit, and was equipped with electrically controlled gel packs that expanded and contracted as needed to aid in pilot circulation.',
          'As with most Zentraedi equipment, the flight suit fell out of use following the mass-micronisation of the Zentraedi population after the First Robotech War. '
        ]
      },
      {
        name: 'Zentraedi Battle Armour',
        description:
          'The Zentraedi Battle Armour was designed to be a heavier counterpart to the Zentraedi Infantry Armour for use by soldiers wielding heavy weapons',
        price: 3300,
        category: 'equipment',
        inStock: true,
        tags: [
          'As the Zentraedi forces expanded, the role of the Battle Armour changed. The suit was repurposed as protection for pilots operating Zentraedi Battle Pods',
          'Originally Designed for use by heavy soldiers, the Zentraedi Battle Armour consisted of a breastplate as well as waist/groin, lower leg/foot and forearm armour, as well as a helmet. '
        ]
      }
    ] // add sample product obj here

    const createdProducts = await Product.insertMany(sampleProducts)
    res
      .status(201)
      .json({ message: 'Seeding successful', products: createdProducts })
  } catch (error) {
    console.error('Seeding error: ', error)
    res.status(500).json({ message: 'Seeding failed', error: error.message })
  }
})

export default router
