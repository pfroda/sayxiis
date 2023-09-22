import Button from '../components/Button';
import ButtonPhoto from '../components/ButtonPhoto';
import InputPhoto from '../components/InputPhoto';
import './styles/tagDayPhoto.css';

export default function TagDayPhoto() {
  return (
    <div className="competion">
      <div className="competionHeader">
        <div className="headerBody">
          <h1 className="tagTitle">Today tag theme</h1>
          <div className="competionTexts">
            <p className="text timeCounter">
              <span className="timer">12:00</span> until reset this tag
            </p>
            <p className="text competionTag">
              Today tag: <span className="tag">#Sky</span>
            </p>
          </div>
          <InputPhoto />
        </div>
      </div>
      <div className="section">
        <Button title={'Examples'} />
      </div>

      <div className="photosCompetionsList">
        <div className="examplesPhotosCompetion">
          <img
            className="photoTag"
            alt="user image photo"
            src="https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
          />
          <img
            className="photoTag"
            alt="user image photo"
            src="https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2567&q=80"
          />
          <img
            className="photoTag"
            alt="user image photo"
            src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
          />
        </div>
      </div>

      <div className="section">
        <div className="buttons">
          <Button title={'Top photos'} />
          <Button title={'See more'} />
        </div>
      </div>
      <div className="listUserPhotos">
        <div className="containerImagesTag">
          <div className="cardTag">
            <img
              alt="user image photo"
              src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
            />
            <div className="infoTag">
              <h1>@userName</h1>
              <p className="btnTag">
                VOTE <span className="counterTag">0</span>
              </p>
            </div>
          </div>

          <div className="cardTag">
            <img
              alt="user image photo"
              src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
            />
            <div className="infoTag">
              <h1>@userName</h1>
              <p className="btnTag">
                VOTE <span className="counterTag">0</span>
              </p>
            </div>
          </div>

          <div className="cardTag">
            <img
              alt="user image photo"
              src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
            />
            <div className="infoTag">
              <h1>@userName</h1>
              <p className="btnTag">
                VOTE <span className="counterTag">0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
