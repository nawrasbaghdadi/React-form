import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
    constructor(props) {
    super(props);
    this.state = {
       currentPage :1,
        friendPerPage:2,
        allFriends :this.props.friends
    };
    this.nextPage  = this.nextPage.bind(this);
    this.renderPageNumbers = this.renderPageNumbers.bind(this);
    
  }
    nextPage(event){
      this.setState({
        currentPage : Number(event.target.id)
      });
    }
    renderPageNumbers(page){
      return <li
        key={page}
        id={page}
        onClick={this.nextPage}
      >{page}</li>
    }

  render () {
    const {currentPage,  friendPerPage} = this.state;
    const allFriends = this.props.friends;
    const indexOfLastFriend = currentPage * friendPerPage ;
    const indexOfFirstFriend = indexOfLastFriend - friendPerPage;
    const currentFriedns = allFriends.slice(indexOfFirstFriend,indexOfLastFriend);
    const pageNumbers =[];
    for(let i=1; i<= Math.ceil(allFriends.length/friendPerPage); i++){
        pageNumbers.push(i);
    }
    return (
      <div>
      <ul className={styles.friendList}>
        {
          currentFriedns.map((friend, index) => {
            return (
              <FriendListItem
                key={index}
                id={index}
                name={friend.name}
                sex={friend.sex}
                starred={friend.starred}
                {...this.props.actions} />
            );
          })
        }
      </ul>
      <ul className="page-numbers">
      {pageNumbers.map(this.renderPageNumbers)}
     
      </ul>
      </div>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  
};

export default FriendList;
