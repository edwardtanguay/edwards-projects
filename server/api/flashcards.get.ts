import { readFile } from 'node:fs/promises'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  try {
    const filePath = './parseddata/flashcards.json'
    const fileContents = await readFile(filePath, 'utf-8')
    const jsonData = JSON.parse(fileContents)
    
    return {
      success: true,
      data: jsonData,
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    return {
      success: false,
      error: 'Failed to read JSON file',
      message: error instanceof Error ? error.message : 'Unknown error'
    }
  }
})