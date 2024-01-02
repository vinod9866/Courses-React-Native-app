import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/clpqmetn1dmj601t2gd7tfaeg/master";

export const getCourseList = async (level) => {
  //
  const query =
    gql`
    query CourseList {
      courses(where: { level: ` +
    level +
    ` }) {
      id
      name
      price
      level
      tags
      time
      author
      banner {
        url
      }
      description {
        markdown
      }
      chapters {
        id
        title
        description {
          markdown
        }
        output {
          markdown
        }
      }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
