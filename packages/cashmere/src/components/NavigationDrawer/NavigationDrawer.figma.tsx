import React from 'react'
import { figma } from '@figma/code-connect'
import { NavigationDrawer } from './NavigationDrawer'

figma.connect(
  NavigationDrawer,
  'https://www.figma.com/design/OEwHAfVtHhfYFGKEalynMP/Cashmere-Design-System?node-id=7819-4420',
  {
    props: {
      productDropdownOpen: figma.enum('Type', {
        'Default': false,
        'Open- Product Vertical': true,
      }),
    },
    example: ({ productDropdownOpen }) => (
      <NavigationDrawer
        productDropdownOpen={productDropdownOpen}
        sections={[
          {
            id: 'main',
            items: [
              { id: 'home', label: 'Home' },
              { id: 'dashboard', label: 'Dashboard' },
            ],
          },
        ]}
        productVerticals={[
          { id: 'collect', label: 'Collect' },
          { id: 'secure', label: 'Secure' },
          { id: 'payouts', label: 'Payouts' },
        ]}
      />
    ),
  }
)
