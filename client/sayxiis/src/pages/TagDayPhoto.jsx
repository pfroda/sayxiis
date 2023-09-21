import Button from '../components/Button';
import ButtonPhoto from '../components/ButtonPhoto';
import './styles/tagDayPhoto.css';

export default function TagDayPhoto() {
  return (
    <div className="competion">
      <div className="competionHeader">
        <h1 className="tagTitle">Today tag theme</h1>
        <div className="competionTexts">
          <h5 className="text timeCounter">
            <span className="timer">12:00</span> until reset this tag
          </h5>
          <p className="text competionTag">
            Today tag: <span className="tag">#Sky</span>
          </p>
        </div>
        <ButtonPhoto />
      </div>
      <div className="photosCompetionsList">
        <Button title={'Examples'} />
        <div className="examplesPhotosCompetion">
          <img
            className="card"
            alt="user image photo"
            src="https://images.unsplash.com/photo-1508020963102-c6c723be5764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
          />
          <img
            className="card"
            alt="user image photo"
            src="https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2567&q=80"
          />
          <img
            className="card"
            alt="user image photo"
            src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
          />
        </div>
        <div>
          <div className="buttons">
            <Button title={'Top photos'} />
            <Button title={'See more'} />
          </div>
          <div className="listUserPhotos">
            <div className="card">
              <img
                className="userPhotoCompetion"
                alt="user image photo"
                src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
              />
              <div className="info">
                <h1>@userName</h1>
                <p className="btn-2">
                  VOTE <span className="counter">0</span>
                </p>
              </div>

              <div className="card">
                <img
                  className="userPhotoCompetion"
                  alt="user image photo"
                  src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                />
                <div className="info">
                  <h1>@userName</h1>
                  <p className="btn-2">
                    VOTE <span className="counter">0</span>
                  </p>
                </div>
              </div>

              <div className="card">
                <img
                  className="userPhotoCompetion"
                  alt="user image photo"
                  src="https://images.unsplash.com/photo-1544829728-e5cb9eedc20e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                />
                <div className="info">
                  <h1>@userName</h1>
                  <p className="btn-2">
                    VOTE <span className="counter">0</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
