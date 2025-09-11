import Overview from './overview'
import PastQuestion from './PastQuestion/PastQuestion';
import SinglePastQuestion from './PastQuestion/SinglePastQuestion';
import DocumentReader from './TextBook/DocumentReader';
import Textbook from './TextBook/textbook';
import TopicSingle from './TextBook/TopicSingle';
import ViewAnalytics from './TextBook/ViewAnalytics';


const jupeb = {
   Overview,
   Textbook: Textbook,
   TopicSingle: TopicSingle,
   DocumentReader: DocumentReader,
   ViewAnalytics: ViewAnalytics,
   PastQuestion: PastQuestion,
   SinglePastQuestion: SinglePastQuestion


}

export default jupeb;