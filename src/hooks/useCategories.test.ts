import { act, renderHook } from '@testing-library/react'
import useCategoriesGet from '@/hooks/useCategoriesGet'
import { CATEGORY_API_URL } from '@/utils/constant'
import { Category } from '@/interfaces/category'

describe('useCategoriesGet', () => {
  let fetchMock: jest.Mock

  beforeEach(() => {
    fetchMock = jest.fn()
    global.fetch = fetchMock
  })

  it('handles fetch categories success', async () => {
    const categories: Category[] = [{ id: '1', name: 'Test Category', is_active: true }]
    fetchMock.mockResolvedValueOnce({
      json: async () => ({ data: categories })
    })

    const { result } = renderHook(() => useCategoriesGet())
    act(() => {
      result.current.setCategories(categories)
    })

    expect(fetchMock).toHaveBeenCalledWith(CATEGORY_API_URL, expect.any(Object))
    expect(result.current.categories).toEqual(categories)
  })

  it('handles server error when fetching categories', async () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ({ errors: ['Server error'] })
    })

    const { result } = renderHook(() => useCategoriesGet())

    expect(fetchMock).toHaveBeenCalledWith(CATEGORY_API_URL, expect.any(Object))
    expect(result.current.categories).toEqual([])
  })
})