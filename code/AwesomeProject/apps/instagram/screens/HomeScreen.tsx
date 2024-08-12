/* eslint-disable react-native/no-inline-styles */
import {View, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';

import Header from '../components/Header';
import Stories from '../components/Stories';
import Posts from '../components/Posts';

import {faker} from '@faker-js/faker';

const perPage = 5;

const HomeScreen = ({navigation}) => {
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);

  const [storiesFetchingState, setStoriesFetchingState] = useState({
    isLoading: true,
    isFetchingMore: false,
    isRefreshing: false,
    currentPage: 1,
  });

  const [postsFetchingState, setPostsFetchingState] = useState({
    isLoading: true,
    isFetchingMore: false,
    isRefreshing: false,
    currentPage: 1,
  });

  useEffect(() => {
    fetchStories({page: 1});
    fetchPosts({page: 1});
  }, []);

  const fetchStories = async ({page, refreshing}: any) => {
    let isFetchingMore = page > 1;

    setStoriesFetchingState(prevState => ({
      ...prevState,
      isFetchingMore,
      isRefreshing: refreshing,
      isLoading: !isFetchingMore && !refreshing,
    }));

    await new Promise(r => setTimeout(r, 3000));

    try {
      const res = await fetch(
        `https://randomuser.me/api/?results=${perPage}&page=${page}&seed=abc`,
      );
      const resData = await res.json();
      const users = resData?.results;

      const newStories = users.map(user => ({
        label: user.login.username,
        image: user.picture.medium,
      }));

      setStories(isFetchingMore ? [...stories, ...newStories] : newStories);
      setStoriesFetchingState(prevState => ({
        ...prevState,
        currentPage: page,
      }));
    } catch (e) {
      console.log('Error');
    } finally {
      setStoriesFetchingState(prevState => ({
        ...prevState,
        isFetchingMore: false,
        isRefreshing: false,
        isLoading: false,
      }));
    }
  };

  const fetchMoreStories = async () => {
    fetchStories({page: storiesFetchingState.currentPage + 1});
  };

  const refreshStories = async () => {
    console.log('REFRESH');
    fetchStories({page: 1, refreshing: true});
  };

  const fetchPosts = async ({page, refreshing}: any) => {
    let isFetchingMore = page > 1;

    setPostsFetchingState(prevState => ({
      ...prevState,
      isFetchingMore,
      isRefreshing: refreshing,
      isLoading: !isFetchingMore && !refreshing,
    }));

    await new Promise(r => setTimeout(r, 3000));

    try {
      let pageValue = perPage * (page - 1);
      const res = await fetch(
        `https://dummyjson.com/posts?limit=${perPage}&skip=${pageValue}`,
      );
      const resData = await res.json();
      const posts = resData?.posts;

      console.log(posts?.length);

      const newPosts = posts.map(post => ({
        caption: post.title.slice(0, 100),
        avatar: faker.internet.avatar(),
        image: faker.image.people(),
        username: faker.internet.displayName().toLowerCase(),

        likes: faker.number.int({min: 10, max: 1000}),
        likedBy: {
          usernames: [
            faker.internet.displayName().toLowerCase(),
            faker.internet.displayName().toLowerCase(),
          ],
          avatars: [
            faker.internet.avatar(),
            faker.internet.avatar(),
            faker.internet.avatar(),
          ],
        },
      }));

      setPosts(isFetchingMore ? [...posts, ...newPosts] : newPosts);
      setPostsFetchingState(prevState => ({
        ...prevState,
        currentPage: page,
      }));
    } catch (e) {
      console.log('Error');
    } finally {
      setPostsFetchingState(prevState => ({
        ...prevState,
        isFetchingMore: false,
        isRefreshing: false,
        isLoading: false,
      }));
    }
  };

  const fetchMorePosts = async () => {
    fetchPosts({page: postsFetchingState.currentPage + 1});
  };

  const refreshPosts = async () => {
    fetchPosts({page: 1, refreshing: true});
  };

  const refreshAll = async () => {
    refreshStories();
    refreshPosts();
  };

  const handleStoryPressed = (story, index) => {
    const allStoriesAfterThisOne = stories.slice(index);
    navigation.navigate('Story', {story, stories: allStoriesAfterThisOne});
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Header />

      <Posts
        Header={
          <>
            <Stories
              stories={stories}
              isLoading={storiesFetchingState.isLoading}
              isFetching={storiesFetchingState.isFetchingMore}
              fetchMore={fetchMoreStories}
              refresh={refreshStories}
              isRefreshing={storiesFetchingState.isRefreshing}
              handleStoryPressed={handleStoryPressed}
            />
            <View
              style={{
                height: 0.5,
                width: '100%',
                backgroundColor: 'silver',
                opacity: 0.3,
                marginTop: 10,
              }}
            />
          </>
        }
        posts={posts}
        isLoading={postsFetchingState.isLoading}
        isFetching={postsFetchingState.isFetchingMore}
        fetchMore={fetchMorePosts}
        refresh={refreshAll}
        isRefreshing={postsFetchingState.isRefreshing}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
