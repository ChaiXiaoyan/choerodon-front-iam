/**
 * Created by chenbinjie on 2018/8/6.
 */
import { action, computed, observable } from 'mobx';
import { axios, store } from 'choerodon-front-boot';
import querystring from 'query-string';

@store('MailTemplateStore')
class MailTemplateStore {
  @observable apiData = [];

  @observable loading = true;

  @observable mailTemplate = [];

  @observable templateType = [];

  @observable currentDetail = {};

  // TODO: 这里调用删除的接口
  deleteMailTemplate = id => axios.delete(`/notify/v1/notices/template/${id}`);


  @action setLoading(flag) {
    this.loading = flag;
  }

  @action setMailTemplate(data) {
    this.mailTemplate = data;
  }

  @action setTemplateType(data) {
    this.templateType = data;
  }

  @computed get getTemplateType() {
    return this.templateType;
  }

  @action setCurrentDetail(data) {
    this.currentDetail = data;
  }

  @computed get getCurrentDetail() {
    return this.currentDetail;
  }

  getMailTemplate() {
    return this.mailTemplate;
  }

  loadMailTemplate = (
    { current, pageSize },
    { name, type, isPredefined },
    { columnKey = 'id', order = 'descend' },
    params, appType, orgId) => {
    const queryObj = {
      name: name && name[0],
      type: type && type[0],
      isPredefined: isPredefined && isPredefined[0],
      params,
    };

    if (columnKey) {
      const sorter = [];
      sorter.push(columnKey);
      if (order === 'descend') {
        sorter.push('desc');
      }
      queryObj.sort = sorter.join(',');
    }
    if (appType === 'site') {
      return axios.get(`/notify/v1/notices/emails/templates?page=${current - 1}&size=${pageSize}&${querystring.stringify(queryObj)}`);
    } else {
      return axios.get(`/notify/v1/notices/emails/templates/organizations/${orgId}?page=${current - 1}&size=${pageSize}&${querystring.stringify(queryObj)}`);
    }
  };

  loadTemplateType = () => axios.get('/notify/v1/notices/send_settings/names');

  createTemplate = data => axios.post('notify/v1/notices/emails/templates', JSON.stringify(data));

  getTemplateDetail = id => axios.get(`notify/v1/notices/emails/templates/${id}`);

  updateTemplateDetail = (id, data) => axios.put(`notify/v1/notices/emails/templates/${id}`, JSON.stringify(data));
}

const mailTemplateStore = new MailTemplateStore();
export default mailTemplateStore;
