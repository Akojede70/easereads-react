import Overview from './overview'
import DocumentReader from './TextBook/DocumentReader';
import Textbook from './TextBook/textbook';
import TopicSingle from './TextBook/TopicSingle';
import ViewAnalytics from './TextBook/ViewAnalytics';


const jupeb = {
   Overview,
   Textbook: Textbook,
   TopicSingle: TopicSingle,
   DocumentReader: DocumentReader,
   ViewAnalytics: ViewAnalytics

}

export default jupeb;