import React, { Fragment } from "react";
import { Layout } from "components/common/layout";
import { Services } from "components/content/services";
import { Techno } from "components/content/techno";
import { Cities } from "components/content/cities";
import { Connect } from "components/common/connect";
import  { getServices, getCities, getTechnologies } from '../lib/api';

export default function Index({ services, cities, technologies }) {


return (
<Fragment>
<Layout>
    
<Services props={services}/>

<Cities props={cities}/>

<Techno/>

<Connect/>

</Layout>
</Fragment>
)
}

export async function getStaticProps() {
const services = await getServices();

const cities = await getCities();

const technologies = await getTechnologies();


return { props: { services, cities, technologies },revalidate: 10 }
}
