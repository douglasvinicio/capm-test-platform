import sanityClient from '@sanity/client'

export const client = sanityClient({
    // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    projectId:'fe2fudrd',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skGQiyPGpLv63ARXgrbobOsKigkKXIoAO4CJvW0g9fUf7Csoe63se7bYkNRyKn2bIcr55SmAxA3pSQSfcYcuj76Qwy5hyKvGYRmPnxxsvQgBCVVmIzMzRlRNTUIxP0Xpdc4afcjdXCJwbsHka0sRqA27A69eWfqYv4AUDgHHhlh4aZuy5C4M',
})


