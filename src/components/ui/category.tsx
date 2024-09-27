interface CategoryProps {
  category: string
}

export function Category({ category }: CategoryProps) {
  return (
    <span className="block mt-4 mb-6 text-lg text-transparent uppercase bg-clip-text bg-text-gradient">
      {category}
    </span>
  )
}

export function CategoryBtn({ category }: CategoryProps) {
  return (
    <span className="px-4 py-2 text-lg rounded-[4px] bg-text-gradient uppercase">
      {category}
    </span>
  )
}
