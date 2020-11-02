import * as React from 'react'
import { View, Image, Text } from 'react-native'
import { globalStyles } from '../../../styles/global'
import { Close, ShoppingBag, MathMinus, MathPlus } from '../../icons'
import { colors } from '../../../res/palette'
import styles from './styles'

const ProductCard = ({ imageSource, name, description, color, size,
   discountedPrice, price, display_price, discountPercent, soldOut, counter, shoppingBag,
   onRemoveLineItem, quantity, variant, onIncrementQuantity, onDecrementQuantity, orders }) => {
  return (
    <View style={styles.productCardWrapper}>
      <View style={[styles.productCardContainer,
        soldOut ? styles.inactiveCard : null
      ]}>
        <Image
          // source={imageSource}
          source={{
            uri: `http://192.168.1.5:3000/${imageSource}`
          }}
          style={styles.productCardImage}
        />
        <View style={styles.favouriteProductDetailsContainer}>
          <View style={globalStyles.containerFluid}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description || 'Women Sea Wash Pleated D ress'}</Text>
            <View style={styles.attributeContainer}>
              <View style={[styles.colorBadge, {backgroundColor: `${color}`}]} />
              <View style={styles.productSizeStyle}>
                <Text style={{paddingHorizontal: 5}}>{size}</Text>
              </View>
              { counter && <View style={styles.counterContainer}>
                <MathMinus size={14} style={{color: colors.primary}} onPress={onDecrementQuantity} />
                <Text style={{color: colors.primary}}>{quantity || '1'}</Text>
                <MathPlus size={14} style={{color: colors.primary}} onPress={onIncrementQuantity} />
              </View> }
            </View>
            <View style={styles.pricingContainer}>
              <Text style={[styles.prices, styles.discountedPrice]}>{discountedPrice}</Text>
              <Text style={[styles.prices, styles.price]}>${price || display_price}</Text>
              <Text style={[styles.prices, styles.discountPercent]}>({discountPercent}% OFF)</Text>
            </View>
          </View>
          <View style={styles.actionsContainer}>
            { !orders && <Close size={24} style={{color: colors.black}} onPress={onRemoveLineItem} /> }
            { !soldOut && shoppingBag && <View style={styles.activeShoppingBag}>
              <ShoppingBag size={24} style={{color: colors.white}} />
            </View> }
          </View>
        </View>
      </View>
      {soldOut ? <Text style={[globalStyles.latoRegular14, styles.description]}>Sorry, this item is currently sold out.</Text> : null}
    </View>
  )
}

export default ProductCard