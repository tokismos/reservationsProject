import { getProducts } from "../models/productModel"

export const getAllProducts = async (req, res) => {
  try {
    const summaryData = await getProducts()

    res.json({
      success: true,
      data: summaryData,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
      message: error.message,
    })
  }
}
