import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Card from '../components/card'
import { useRouter } from 'next/router';
import { useContext, useState } from 'react'
import { SearchContext } from '../components/context/search'
import SearchAndFilter from '../components/search'


const searchTitle = (item, toBeChecked) => {
    return (
        searchByTitle(item.frontmatter.title, toBeChecked))
}
const searchByTitle = (title, toBeChecked) => {
    return title.toLowerCase().includes(toBeChecked)
}



export async function getStaticPaths() {
    const files = fs.readdirSync('MdFiles')
    const filesData = files.map(fileName => {
        const slug = fileName.replace('.md', '')
        const filepath = `MdFiles/${fileName}`
        const readFile = fs.readFileSync(filepath, 'utf-8')
        const stats = fs.statSync(filepath)
        const { data: frontmatter } = matter(readFile)
        return {
            frontmatter
        }
    })
    const paths = filesData.map(fileName => ({
        params: {
            category: fileName.frontmatter.category
        }
    }))
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params: { category } }) {
    const files = fs.readdirSync('MdFiles')
    const filesData = files.map(fileName => {
        const slug = fileName.replace('.md', '')
        const filepath = `MdFiles/${fileName}`
        const readFile = fs.readFileSync(filepath, 'utf-8')
        const stats = fs.statSync(filepath)
        const { data: frontmatter } = matter(readFile)
        frontmatter.mtime = stats.mtime.toLocaleDateString()
        return {
            slug,
            frontmatter,
        }
    })
    return {
        props: {
            filesData,
            category
        }
    }
}


export default function CategoryPage({ filesData, category }) {
    const [value, setValue] = useState('');
    const router = useRouter();
    return (
        <SearchContext.Provider value={{ value, setValue }}>
                        <div>                   
                 <h1 className=" font-semibold text-center mb-3 -mt-3 text-4xl">{useRouter().query.category}</h1>
            </div>

            <div className="mb-12  text-center">
                <div className='-mb-2'><h2 className="text-2xl font-medium text-greyish">
                    Choose Your Desired Model
                </h2></div>
                <SearchAndFilter />

            </div>
            <div className="grid grid-cols-1 p-4 md:grid-cols-2 md:p-0 lg:grid-cols-3 xl:grid-cols-4">

                {filesData.filter(item => item.frontmatter.show == true).filter(props => props.frontmatter.category == category).filter(item => searchTitle(item, value)).map(props => {
                    return (
                        <Card
                            key={props.slug}
                            slug={props.slug}
                            title={props.frontmatter.title}
                            category={props.frontmatter.category}
                            thumbnail={props.frontmatter.thumbnail}
                            desc={props.frontmatter.desc}
                        />
                    )
                })}
            </div>
        </SearchContext.Provider>
    )
}