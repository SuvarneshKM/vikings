import Header from '../src/components/Header';
import './App.css';
import styled from 'styled-components';
import CloudData from "./Data/vikings.json";
import { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <section id="projects" class="projects container">
      <div class="projects-details">
        <div class="projects-cards">
          <Header />
          <SearchSection>
            <SearchForm>
              <SearchInput
                type="text"
                placeholder="Search"
                onChange={event => {
                  setSearchTerm(event.target.value)
                }}
              />
            </SearchForm>
          </SearchSection>
          <ul class="cards">
            {
              CloudData.filter(CloudDetail => {
                if (searchTerm == "") {
                  return CloudDetail
                } else if (
                  CloudDetail.name.toLocaleLowerCase().includes(
                    searchTerm.toLocaleLowerCase()
                  )
                ) {
                  return CloudDetail
                }
              }).map((CloudDetail, index) => {
                return (
                  <li class="cards_item">
                    <div class="card">
                      <div class="card_image">
                        <img src={`${CloudDetail.img}`} /></div>
                      <div class="card_content">
                        <h2 class="card_title">{CloudDetail.name}</h2>
                        <p class="card_text">{CloudDetail.details}</p>
                      </div>
                    </div>
                  </li>

                )
              })
            }
          </ul>
        </div>
      </div>
    </section>

  )

}

// const DivContainer = styled.div`
//   max-width: 1100px;
//   margin: auto;
//   padding: 0 20px;
// `;

const SearchSection = styled.section`
    height: 100px;
`;

const SearchForm = styled.form`

`;

const SearchInput = styled.input`
  display: block;
  padding: 10px;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  width: 60%;
  margin: auto;
  outline: none;
`;

export default App