import React,{Component} from 'react';
import {
	FlatList,
	Text,
} from 'react-native';
import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';
import {connect} from 'react-redux';

function mapStateToProps(state){
	return {
		list:state.suggestionList
	}
}

class SuggestionList extends Component{

	keyExtractor =item=> item.id.toString()
	renderEmpty = () => <Empty text="No hay sugerencias 🙁"/>
	itemSeparator = () => <Separator />

	renderItem= ({item})=>{
		return (
		  <Suggestion {...item} />
		)
	}

	render(){

		return (
	          <Layout
	          	title="Recomendado para tí"
	          >
	          	<FlatList
	          		keyExtractor={this.keyExtractor}
					data={this.props.list}
					ListEmptyComponent={this.renderEmpty}
					ItemSeparatorComponent={this.itemSeparator}
					renderItem={this.renderItem}
				/>
	          </Layout>			
				
		)
	}
}

export default connect(mapStateToProps)(SuggestionList);