import { MenuItem, NavBarContainer, NavBarContent, NavBarMenu, NavBarTitleContainer } from "./styles";
import { GitCommit, Users } from 'phosphor-react'
import rockHand from '../../assets/noun-rock-710929.svg'
import { graphqlClient } from "../../graphql/graphqClient";
import { RequestDocument } from "graphql-request/dist/types";
import { Link } from "react-router-dom";
import useSWR from "swr";

export function NavBar() {

  const fetcher = (query: RequestDocument) => graphqlClient.request(query)

  const userInfoQuery = `{
    viewer {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
      }
    }
    user(login: "olavocarvalho") {
      followers {
        totalCount
      }
    }
  }`

  const { data, error } = useSWR(userInfoQuery, fetcher)

  if (data) {
    console.log(data)
  }
  if (error) {
    console.log(error)
  }

  return (
    <NavBarContainer>
      <NavBarContent>
        <NavBarTitleContainer>
          <div>
            <img src={rockHand} alt="" height={32} />
          </div>
          <div>
            <h1><Link to="/">olavo<span>.</span>decarvalho<span>.rocks</span></Link></h1>

            {data && <h6><span><GitCommit size={16} />&nbsp;{data.viewer.contributionsCollection.contributionCalendar.totalContributions}</span><span><Users size={16} />&nbsp;{data.user.followers.totalCount} on github!</span></h6>}

          </div>
        </NavBarTitleContainer>
        <NavBarMenu>
          <MenuItem><Link to="/">Projects</Link></MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem><Link to="/blog">Blog</Link></MenuItem>
          <MenuItem type="highlight">👋 Let's Talk</MenuItem>
        </NavBarMenu>
      </NavBarContent>
    </NavBarContainer >
  )
}