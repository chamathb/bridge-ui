/**
 * Created by chamathbogahawatta on 14/04/2019.
 */
import { AbilityBuilder } from '@casl/ability'

/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */
function subjectName(item) {
  if (!item || typeof item === 'string') {
    return item;
  }

  return item.__type;
}

export default AbilityBuilder.define({ subjectName }, can => {
  can(['read', 'create'], 'Task');
  can(['update', 'delete'], 'Task', { assignee: 'me' });
});