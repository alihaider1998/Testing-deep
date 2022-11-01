/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Card from '../components/card'
import ModelCard from '../components/modelCard'
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react'
import { SearchContext } from '../components/context/search'
import SearchAndFilter from '../components/search'


const searchTitle = (item, toBeChecked) => {
    return (
        item.frontmatter.subcategory ? searchByTitle(item.frontmatter.title, toBeChecked) ||
        searchBySubCatergory(item.frontmatter.subcategory, toBeChecked) : 
        searchByTitle(item.frontmatter.title, toBeChecked)
    )
}
const searchByTitle = (title, toBeChecked) => {
    return title.toLowerCase().includes(toBeChecked)
}
const searchBySubCatergory = (subcategory, toBeChecked) => {
    return subcategory.toLowerCase().includes(toBeChecked)
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
            subcategory: fileName.frontmatter.category,
        }
    }))
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params: { subcategory } }) {
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
            subcategory
        }
    }
}


export default function CategoryPage({ filesData, subcategory }) {
    const [value, setValue] = useState('');
    const router = useRouter();
    //Start Filtering out records and avoiding one category to appear more time   
    const newCategoryArr = new Set();
    const unique = filesData.filter(item => item.frontmatter.show == true).filter(element => {
        const isDuplicate = newCategoryArr.has(element.frontmatter.subcategory);
        newCategoryArr.add(element.frontmatter.subcategory);
        if (!isDuplicate) {
            return true;
        }
        return false;
    });
    //Finish Filtering out records and avoiding one category to appear more time 
    let subcategoryExists = false;
    let subcategoryModelsExists = false;
    return (
        <SearchContext.Provider value={{ value, setValue }}>
            <div>
                <h1 className=" font-semibold text-center mb-3 -mt-3 text-4xl">{useRouter().query.subcategory}</h1>
            </div>

            <div className="mb-12  text-center">
                <div className='-mb-2'><h2 className="text-2xl font-medium text-greyish">
                    Choose Your Desired Option
                </h2></div>
                <SearchAndFilter />

            </div>

            {/* Start Conditional Rendering of Subcategories heading */}
            {unique.filter(item => item.frontmatter.show == true)
                .filter(props => props.frontmatter.category == subcategory)
                .filter(item => searchTitle(item, value)).map(props => {
                    if (props.frontmatter.subcategory) {
                        subcategoryExists = true
                    }
                })}
            {subcategoryExists ? <div className="text-center">
                <h1 className=" font-semibold text-center mb-3 -mt-3 text-4xl">
                    Subcategories of {useRouter().query.subcategory}
                </h1>
            </div> : false}
            {/* Ending Conditional Rendering of Subcategories heading */}

            <div className="grid grid-cols-1 p-4 md:grid-cols-2 md:p-0 lg:grid-cols-3 xl:grid-cols-4">
                {unique.filter(item => item.frontmatter.show == true)
                    .filter(props => props.frontmatter.category == subcategory)
                    .filter(item => searchTitle(item, value)).map(props => {
                        if (props.frontmatter.subcategory) {
                            return (
                                <Card
                                    key={props.slug}
                                    slug={props.slug}
                                    title={props.frontmatter.title}
                                    category={props.frontmatter.category}
                                    subcategory={props.frontmatter.subcategory}
                                    thumbnail={props.frontmatter.thumbnail}
                                    desc={props.frontmatter.desc}
                                />
                            )
                        }
                    })}
            </div>
            {/* Start Conditional Rendering of models heading in Subcategories */}
            {filesData.filter(item => item.frontmatter.show == true)
                .filter(props => props.frontmatter.category == subcategory)
                .filter(item => searchTitle(item, value)).map(props => {
                    if (!props.frontmatter.subcategory) {
                        subcategoryModelsExists = true
                    }
                })}
            {subcategoryModelsExists ?
                <div className="text-center">
                    <h1 className=" font-semibold text-center mb-2 mt-5 text-4xl">
                        Models of {useRouter().query.subcategory}
                    </h1>
                </div> : false}
            {/* Ending Conditional Rendering of models heading in Subcategories */}

            <div className="grid grid-cols-1 p-4 md:grid-cols-2 md:p-0 lg:grid-cols-3 xl:grid-cols-4">
                {filesData.filter(item => item.frontmatter.show == true)
                    .filter(props => props.frontmatter.category == subcategory)
                    .filter(item => searchTitle(item, value)).map(props => {
                        if (!props.frontmatter.subcategory) {

                            return (
                                <ModelCard
                                    key={props.slug}
                                    slug={props.slug}
                                    title={props.frontmatter.title}
                                    category={props.frontmatter.category}
                                    subcategory={props.frontmatter.subcategory}
                                    thumbnail={props.frontmatter.thumbnail}
                                    desc={props.frontmatter.desc}
                                />
                            )
                        }
                    })}
            </div>
        </SearchContext.Provider>
    )
}